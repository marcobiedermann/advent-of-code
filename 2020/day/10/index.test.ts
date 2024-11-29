import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n').map(Number);
const exampleInput = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
const largerExampleInput = [
  28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7,
  9, 4, 2, 34, 10, 3,
];

describe('Day 10', () => {
  describe('Part 1', () => {
    it('should return difference in jolt', () => {
      assert.strictEqual(part1(exampleInput), 35);
      assert.strictEqual(part1(largerExampleInput), 220);
      assert.strictEqual(part1(input), 2380);
    });
  });

  describe('Part 2', () => {
    it('should return number of different arrangements', () => {
      assert.strictEqual(part2(exampleInput), 8);
      assert.strictEqual(part2(largerExampleInput), 19208);
      assert.strictEqual(part2(input), 48358655787008);
    });
  });
});
