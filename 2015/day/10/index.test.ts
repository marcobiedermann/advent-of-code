import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = '1113122113';

describe('Day 10', () => {
  describe('Part 1', () => {
    it('should process 40 iterations', () => {
      assert.strictEqual(part1(input), 360154);
    });
  });

  describe('Part 2', () => {
    it('should process 50 iterations', () => {
      assert.strictEqual(part2(input), 5103798);
    });
  });
});
