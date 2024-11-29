import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should return highest seat on boarding pass', () => {
      assert.strictEqual(part1(['FBFBBFFRLR']), 357);
      assert.strictEqual(part1(['BFFFBBFRRR']), 567);
      assert.strictEqual(part1(['FFFBBBFRRR']), 119);
      assert.strictEqual(part1(['BBFFBBFRLL']), 820);
      assert.strictEqual(part1(input), 970);
    });
  });

  describe('Part 2', () => {
    it('should return the ID of seat', () => {
      assert.strictEqual(part2(input), 587);
    });
  });
});
