import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = await getInput(import.meta.dirname);
const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe('2024', () => {
  describe('Day 2', () => {
    describe('Part 1', () => {
      it('should find the safe reports', () => {
        assert.strictEqual(part1(sampleInput), 2);
        assert.strictEqual(part1(input), 421);
      });
    });

    describe('Part 2', () => {
      it('should find the safe reports after removing one level', () => {
        assert.strictEqual(part2(sampleInput), 4);
        assert.strictEqual(part2(input), 476);
      });
    });
  });
});
