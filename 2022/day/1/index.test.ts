import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const sample = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8')).split('\n\n');
const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should find the elf carrying the most calories', () => {
      assert.strictEqual(part1(sample), 24000);
      assert.strictEqual(part1(input), 71502);
    });
  });

  describe('Part 2', () => {
    it('should find the top three elves carrying the most calories', () => {
      assert.strictEqual(part2(sample), 45000);
      assert.strictEqual(part2(input), 208191);
    });
  });
});
