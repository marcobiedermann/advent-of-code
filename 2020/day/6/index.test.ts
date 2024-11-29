import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n\n');
const sampleInput = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8')).split('\n\n');

describe('Day 6', () => {
  describe('Part 1', () => {
    it('should return count of some answers', () => {
      assert.strictEqual(part1(sampleInput), 11);
      assert.strictEqual(part1(input), 6161);
    });
  });

  describe('Part 2', () => {
    it('should return count of all answers', () => {
      assert.strictEqual(part2(sampleInput), 6);
      assert.strictEqual(part2(input), 2971);
    });
  });
});
