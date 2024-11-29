import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should count valid passwords', () => {
      assert.strictEqual(part1(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']), 2);
      assert.strictEqual(part1(input), 422);
    });
  });

  describe('Part 2', () => {
    it('should count valid passwords', () => {
      assert.strictEqual(part2(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']), 1);
      assert.strictEqual(part2(input), 451);
    });
  });
});
