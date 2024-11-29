import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = [1, 20, 11, 6, 12, 0];

describe('Day 15', () => {
  describe('Part 1', () => {
    it('should return spoken number at position `2020`', () => {
      const n = 2020;

      assert.strictEqual(part1([0, 3, 6], n), 436);
      assert.strictEqual(part1(input, n), 1085);
    });
  });

  describe.skip('Part 2', () => {
    it('should return spoken number at position `30000000`', () => {
      const n = 30000000;

      assert.strictEqual(part2([0, 3, 6], n), 175594);
      assert.strictEqual(part2([1, 3, 2], n), 2578);
      assert.strictEqual(part2([2, 1, 3], n), 3544142);
      assert.strictEqual(part2([1, 2, 3], n), 261214);
      assert.strictEqual(part2([2, 3, 1], n), 6895259);
      assert.strictEqual(part2([3, 2, 1], n), 18);
      assert.strictEqual(part2([3, 1, 2], n), 362);
      assert.strictEqual(part2(input, n), 10652);
    });
  });
});
