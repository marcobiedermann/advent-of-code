import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should find the two entries that sum to 2020', () => {
      assert.strictEqual(part1([1721, 979, 366, 299, 675, 1456], 2020), 514579);
      assert.strictEqual(part1(input, 2020), 902451);
    });
  });

  describe('Part 2', () => {
    it('should find the three entries that sum to 2020', () => {
      assert.strictEqual(part2([1721, 979, 366, 299, 675, 1456], 2020), 241861950);
      assert.strictEqual(part2(input, 2020), 85555470);
    });
  });
});
