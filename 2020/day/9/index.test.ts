import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n').map(Number);
const sampleInput = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8'))
  .split('\n')
  .map(Number);

describe('Day 9', () => {
  describe('Part 1', () => {
    it('should find largest number which can not be made up from two numbers', () => {
      assert.strictEqual(part1(sampleInput, 5), 127);
      assert.strictEqual(part1(input), 507622668);
    });
  });

  describe('Part 2', () => {
    it('should should find smallest and largest number which can not be made up from two numbers', () => {
      assert.strictEqual(part2(sampleInput, 127), 62);
      assert.strictEqual(part2(input, 507622668), 76688505);
    });
  });
});
