import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return the sum of all digits that match the next digit in the list', () => {
      assert.strictEqual(part1(input), 1097);
    });
  });
});
