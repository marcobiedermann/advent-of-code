import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split(',').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return result at position `0`', () => {
      assert.strictEqual(part1(input), 5866663);
    });
  });

  describe('Part 2', () => {
    it('should find noun and verb resulting in target', () => {
      assert.strictEqual(part2(input, 19690720), 4259);
    });
  });
});
