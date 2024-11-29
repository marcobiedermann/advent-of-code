import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');
const sample = (await getInputSample(import.meta.dirname)).split('\n');

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should find the number of fully contained assignment sections', () => {
      assert.strictEqual(part1(sample), 2);
      assert.strictEqual(part1(input), 511);
    });
  });

  describe('Part 2', () => {
    it('should find the number of overlapping assignment sections', () => {
      assert.strictEqual(part2(sample), 4);
      assert.strictEqual(part2(input), 821);
    });
  });
});
