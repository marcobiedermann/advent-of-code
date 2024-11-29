import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');

describe('Day 14', () => {
  describe('Part 1', () => {
    it('should return the max distance', () => {
      assert.strictEqual(part1(input), 2660);
    });
  });
});
