import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');

describe('2016 Day 3', () => {
  describe('Part 1', () => {
    it('should return number of possible triangles', () => {
      assert.strictEqual(part1(input), 983);
    });
  });

  describe('Part 2', () => {
    it('should return number of possible triangles', () => {
      assert.strictEqual(part2(input), 1836);
    });
  });
});
