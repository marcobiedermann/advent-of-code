import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const sample = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8')).split('\n');
const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should find the number of fully contained assignment sections', () => {
      assert.strictEqual(part1(sample), 2);
      assert.strictEqual(part1(input), 511);
    });
  });

  describe('Part 2', () => {
    it('should find the number of overlapping assignment sections', () => {
      assert.strictEqual(part2(sample), 4);
      assert.strictEqual(part2(input), 821);
    });
  });
});
