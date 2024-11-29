import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n').map(Number);
const sampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe('2021 Day 1', () => {
  describe('Part 1', () => {
    it('should count the number of times a depth measurement increases', () => {
      assert.strictEqual(part1(sampleInput), 7);
      assert.strictEqual(part1(input), 1759);
    });
  });

  describe('Part 2', () => {
    it('should count the number of times the sum of measurements in this sliding window increases', () => {
      assert.strictEqual(part2(sampleInput), 5);
      assert.strictEqual(part2(input), 1805);
    });
  });
});
