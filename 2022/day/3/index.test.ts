import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const sample = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8')).split('\n');
const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should find the sum of the priorities', () => {
      assert.strictEqual(part1(sample), 157);
      assert.strictEqual(part1(input), 7831);
    });
  });

  describe('Part 2', () => {
    it('should find the sum of the priorities', () => {
      assert.strictEqual(part2(sample), 70);
      assert.strictEqual(part2(input), 2683);
    });
  });
});
