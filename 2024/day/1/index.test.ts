import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = await getInput(import.meta.dirname);
const sampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

describe('2024', () => {
  describe('Day 1', () => {
    describe('Part 1', () => {
      it('should calculate the total distance between the lists', () => {
        assert.strictEqual(part1(sampleInput), 11);
        assert.strictEqual(part1(input), 1590491);
      });
    });

    describe('Part 2', () => {
      it('should calculate the total similarity score', () => {
        assert.strictEqual(part2(sampleInput), 31);
        assert.strictEqual(part2(input), 22588371);
      });
    });
  });
});
