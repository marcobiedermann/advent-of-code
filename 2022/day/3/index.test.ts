import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');
const sample = (await getInputSample(import.meta.dirname)).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should find the sum of the priorities', () => {
      assert.strictEqual(part1(sample), 157);
      assert.strictEqual(part1(input), 7831);
    });
  });

  describe('Part 2', () => {
    it('should find the sum of the priorities', () => {
      assert.strictEqual(part2(sample), 70);
      assert.strictEqual(part2(input), 2683);
    });
  });
});
