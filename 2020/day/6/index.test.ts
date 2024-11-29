import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n\n');
const sampleInput = (await getInputSample(import.meta.dirname)).split('\n\n');

describe('Day 6', () => {
  describe('Part 1', () => {
    it('should return count of some answers', () => {
      assert.strictEqual(part1(sampleInput), 11);
      assert.strictEqual(part1(input), 6161);
    });
  });

  describe('Part 2', () => {
    it('should return count of all answers', () => {
      assert.strictEqual(part2(sampleInput), 6);
      assert.strictEqual(part2(input), 2971);
    });
  });
});
