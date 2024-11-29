import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should calculate total fuel', () => {
      assert.strictEqual(part1([12]), 2);
      assert.strictEqual(part1([14]), 2);
      assert.strictEqual(part1([1969]), 654);
      assert.strictEqual(part1([100756]), 33583);
      assert.strictEqual(part1(input), 3239890);
    });
  });

  describe('Part 2', () => {
    it('should calculate total fuel', () => {
      assert.strictEqual(part2([14]), 2);
      assert.strictEqual(part2([1969]), 966);
      assert.strictEqual(part2([100756]), 50346);
      assert.strictEqual(part2(input), 4856963);
    });
  });
});
