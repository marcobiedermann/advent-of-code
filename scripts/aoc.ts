#!/usr/bin/env node --experimental-strip-types

import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';
import { input as promptInput, select } from '@inquirer/prompts';
import TurndownService from 'turndown';

const CURRENT_YEAR = new Date().getFullYear();

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function resolveArgs(): Promise<{ year: number; day: number }> {
  const { values, positionals } = parseArgs({
    args: process.argv.slice(2),
    options: {
      year: { type: 'string' },
      day: { type: 'string' },
    },
    allowPositionals: true,
    strict: false,
  });

  let year: number | undefined;
  let day: number | undefined;

  if (positionals.length >= 2) {
    year = parseInt(positionals[0], 10);
    day = parseInt(positionals[1], 10);
  } else if (values.year && values.day) {
    year = parseInt(values.year as string, 10);
    day = parseInt(values.day as string, 10);
  } else {
    const yearChoices = Array.from({ length: CURRENT_YEAR - 2015 + 1 }, (_, i) => {
      const y = CURRENT_YEAR - i;
      return { value: y, name: String(y) };
    });
    year = await select({ message: 'Select year', choices: yearChoices });

    const dayChoices = Array.from({ length: 25 }, (_, i) => ({
      value: i + 1,
      name: `Day ${i + 1}`,
    }));
    day = await select({ message: 'Select day', choices: dayChoices });
  }

  return { year, day };
}

async function resolveSession(): Promise<string> {
  if (process.env.AOC_SESSION) {
    return process.env.AOC_SESSION;
  }

  const session = await promptInput({ message: 'Enter your AOC_SESSION cookie value' });
  return session;
}

async function fetchPuzzlePage(year: number, day: number, session: string): Promise<string> {
  const url = `https://adventofcode.com/${year}/day/${day}`;
  const response = await fetch(url, {
    headers: { Cookie: `session=${session}` },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch puzzle page: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

async function fetchPuzzleInput(year: number, day: number, session: string): Promise<string> {
  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  const response = await fetch(url, {
    headers: { Cookie: `session=${session}` },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch puzzle input: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function htmlToMarkdown(html: string): string {
  const td = new TurndownService();
  // Extract only the article content
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  const content = articleMatch ? articleMatch[0] : html;
  return td.turndown(content);
}

function scaffoldIndex(): string {
  return `function part1(input: string): unknown {
  return input;
}

function part2(input: string): unknown {
  return input;
}

export { part1, part2 };
`;
}

function scaffoldTest(year: number, day: number): string {
  return `import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = await getInput(import.meta.dirname);

describe('${year}', () => {
  describe('Day ${day}', () => {
    describe('Part 1', () => {
      it('should return the correct answer', () => {
        assert.strictEqual(part1(input), undefined);
      });
    });

    describe('Part 2', () => {
      it('should return the correct answer', () => {
        assert.strictEqual(part2(input), undefined);
      });
    });
  });
});
`;
}

async function updateReadme(year: number, day: number): Promise<void> {
  const readmePath = new URL('../README.md', import.meta.url).pathname;
  let content = await readFile(readmePath, 'utf8');

  const dayLink = `[Day ${day}](${year}/day/${day})`;
  const paddedDay =
    day < 10 ? `[Day ${day}](${year}/day/${day})  ` : `[Day ${day}](${year}/day/${day})`;

  // Check if year section already exists
  const yearHeadingRegex = new RegExp(`#### ${year}`);
  if (yearHeadingRegex.test(content)) {
    // Find the table for this year and insert new row in descending order
    const yearSectionRegex = new RegExp(
      `(#### ${year}\\s*\\n\\s*\\|[^\\n]+\\|\\s*\\n\\s*\\|[-| ]+\\|\\s*\\n)((?:\\s*\\|[^\\n]+\\|\\s*\\n)*)`,
    );
    const match = content.match(yearSectionRegex);
    if (match) {
      const tableStart = match[1];
      const existingRows = match[2];

      // Check if this day already exists
      if (existingRows.includes(`/${year}/day/${day})`)) {
        console.log(`README already has entry for ${year} Day ${day}, skipping.`);
        return;
      }

      // Build new row - match column widths from existing rows
      const newRow = `| ${paddedDay} |        |\n`;
      // Insert at the top (highest day = first row)
      const firstRowMatch = existingRows.match(/(\s*\|[^\n]+\|\s*\n)/);
      let newRows: string;
      if (firstRowMatch) {
        // Find the right insertion point (descending order)
        const rows = existingRows.split('\n').filter((r) => r.trim().startsWith('|'));
        const insertIndex = rows.findIndex((r) => {
          const m = r.match(/Day (\d+)/);
          return m ? parseInt(m[1], 10) < day : false;
        });
        if (insertIndex === -1) {
          newRows = existingRows + newRow;
        } else {
          rows.splice(insertIndex, 0, `| ${paddedDay} |        |`);
          newRows = rows.map((r) => r + '\n').join('');
        }
      } else {
        newRows = existingRows + newRow;
      }

      content = content.replace(yearSectionRegex, tableStart + newRows);
    }
  } else {
    // Add new year section before "## Setup" or at end of Events section
    const fullTable = `#### ${year}

| Day                   | Stars |
| --------------------- | ----- |
| ${dayLink} |       |

`;
    // Insert before "## Setup"
    content = content.replace('## Setup', fullTable + '## Setup');

    // Also update Table of Contents
    const tocYearEntry = `  - [${year}](#${year})`;
    if (!content.includes(tocYearEntry)) {
      // Insert after the last year in the ToC
      const lastYearInToc = content.match(/(  - \[\d{4}\]\(#\d{4}\)\n)/g);
      if (lastYearInToc) {
        const last = lastYearInToc[lastYearInToc.length - 1];
        content = content.replace(last, last + tocYearEntry + '\n');
      }
    }
  }

  await writeFile(readmePath, content, 'utf8');
  console.log(`✓ Updated README.md`);
}

async function main() {
  const { year, day } = await resolveArgs();
  const session = await resolveSession();

  const dir = `${process.cwd()}/${year}/day/${day}`;
  await mkdir(dir, { recursive: true });

  const readmePath = `${dir}/README.md`;
  const inputPath = `${dir}/input`;
  const indexPath = `${dir}/index.ts`;
  const testPath = `${dir}/index.test.ts`;

  let skipped = false;

  if (await exists(readmePath)) {
    console.warn(`⚠ ${readmePath} already exists, skipping.`);
    skipped = true;
  } else {
    const html = await fetchPuzzlePage(year, day, session);
    const markdown = htmlToMarkdown(html);
    await writeFile(readmePath, markdown, 'utf8');
    console.log(`✓ Wrote ${readmePath}`);
  }

  if (await exists(inputPath)) {
    console.warn(`⚠ ${inputPath} already exists, skipping.`);
    skipped = true;
  } else {
    const puzzleInput = await fetchPuzzleInput(year, day, session);
    await writeFile(inputPath, puzzleInput, 'utf8');
    console.log(`✓ Wrote ${inputPath}`);
  }

  if (await exists(indexPath)) {
    console.warn(`⚠ ${indexPath} already exists, skipping.`);
    skipped = true;
  } else {
    await writeFile(indexPath, scaffoldIndex(), 'utf8');
    console.log(`✓ Wrote ${indexPath}`);
  }

  if (await exists(testPath)) {
    console.warn(`⚠ ${testPath} already exists, skipping.`);
    skipped = true;
  } else {
    await writeFile(testPath, scaffoldTest(year, day), 'utf8');
    console.log(`✓ Wrote ${testPath}`);
  }

  if (!skipped) {
    await updateReadme(year, day);
  } else {
    await updateReadme(year, day);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
