import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');
const sample = (await getInputSample(import.meta.dirname)).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the total score', () => {
      assert.strictEqual(part1(sample), 15);
      assert.strictEqual(part1(input), 15422);
    });
  });

  describe('Part 2', () => {
    it('should return the total score', () => {
      assert.strictEqual(part2(sample), 12);
      assert.strictEqual(part2(input), 15442);
    });
  });
});
