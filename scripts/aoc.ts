#!/usr/bin/env node --experimental-strip-types

import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';
import { input as promptInput, select } from '@inquirer/prompts';
import TurndownService from 'turndown';

interface AocTarget {
  year: number;
  day: number;
}

const CURRENT_YEAR = new Date().getFullYear();

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function writeIfAbsent(path: string, content: string): Promise<void> {
  if (await exists(path)) {
    console.warn(`⚠ ${path} already exists, skipping.`);
    return;
  }
  await writeFile(path, content, 'utf8');
  console.log(`✓ Wrote ${path}`);
}

async function resolveArgs(): Promise<AocTarget> {
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

  return promptInput({ message: 'Enter your AOC_SESSION cookie value' });
}

async function aocFetch(url: string, session: string): Promise<string> {
  const response = await fetch(url, {
    headers: { Cookie: `session=${session}` },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

function htmlToMarkdown(html: string): string {
  const turndownService = new TurndownService();
  const articles = [...html.matchAll(/<article[^>]*>[\s\S]*?<\/article>/g)].map((m) => m[0]);
  const content = articles.length > 0 ? articles.join('\n\n') : html;
  return turndownService.turndown(content);
}

function scaffoldIndex(): string {
  return `function part1(input: string): unknown {
  void input;
  return undefined;
}

function part2(input: string): unknown {
  void input;
  return undefined;
}

export { part1, part2 };
`;
}

function scaffoldTest({ year, day }: AocTarget): string {
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

async function updateReadme({ year, day }: AocTarget): Promise<void> {
  const readmePath = new URL('../README.md', import.meta.url).pathname;
  let content = await readFile(readmePath, 'utf8');

  const paddedDay =
    day < 10 ? `[Day ${day}](${year}/day/${day})  ` : `[Day ${day}](${year}/day/${day})`;

  // Match both ### and #### heading levels used in existing README
  const yearHeadingRegex = new RegExp(`#{3,4} ${year}`);
  if (yearHeadingRegex.test(content)) {
    const yearSectionRegex = new RegExp(
      `(#{3,4} ${year}\\s*\\n\\s*\\|[^\\n]+\\|\\s*\\n\\s*\\|[-| ]+\\|\\s*\\n)((?:\\s*\\|[^\\n]+\\|\\s*\\n)*)`,
    );
    const match = content.match(yearSectionRegex);
    if (match) {
      const tableStart = match[1];
      const existingRows = match[2];

      if (existingRows.includes(`/${year}/day/${day})`)) {
        console.log(`README already has entry for ${year} Day ${day}, skipping.`);
        return;
      }

      const newRow = `| ${paddedDay} |        |`;
      const rows = existingRows.split('\n').filter((r) => r.trim().startsWith('|'));
      const insertIndex = rows.findIndex((r) => {
        const m = r.match(/Day (\d+)/);
        return m ? parseInt(m[1], 10) < day : false;
      });

      if (insertIndex === -1) {
        rows.push(newRow);
      } else {
        rows.splice(insertIndex, 0, newRow);
      }

      const newRows = rows.map((r) => r + '\n').join('');
      content = content.replace(yearSectionRegex, tableStart + newRows);
    }
  } else {
    const dayLink = `[Day ${day}](${year}/day/${day})`;
    const fullTable = `#### ${year}

| Day                   | Stars |
| --------------------- | ----- |
| ${dayLink} |       |

`;
    content = content.replace('## Setup', fullTable + '## Setup');
  }

  await writeFile(readmePath, content, 'utf8');
  console.log(`✓ Updated README.md`);
}

async function main() {
  const target = await resolveArgs();
  const { year, day } = target;
  const session = await resolveSession();

  const dir = `${process.cwd()}/${year}/day/${day}`;
  await mkdir(dir, { recursive: true });

  const html = await aocFetch(`https://adventofcode.com/${year}/day/${day}`, session);
  await writeIfAbsent(`${dir}/README.md`, htmlToMarkdown(html));

  const puzzleInput = await aocFetch(`https://adventofcode.com/${year}/day/${day}/input`, session);
  await writeIfAbsent(`${dir}/input`, puzzleInput);

  await writeIfAbsent(`${dir}/index.ts`, scaffoldIndex());
  await writeIfAbsent(`${dir}/index.test.ts`, scaffoldTest(target));

  await updateReadme(target);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
