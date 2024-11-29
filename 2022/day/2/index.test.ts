import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const sample = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8')).split('\n');
const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the total score', () => {
      assert.strictEqual(part1(sample), 15);
      assert.strictEqual(part1(input), 15422);
    });
  });

  describe('Part 2', () => {
    it('should return the total score', () => {
      assert.strictEqual(part2(sample), 12);
      assert.strictEqual(part2(input), 15442);
    });
  });
});
