import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the checksum of boxes containing two or three unique letters', () => {
      assert.strictEqual(
        part1(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']),
        12,
      );
      assert.strictEqual(part1(input), 5727);
    });
  });
});
