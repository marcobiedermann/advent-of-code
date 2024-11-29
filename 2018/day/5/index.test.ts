import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = await getInput(import.meta.dirname);

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should return the number of remaining units', () => {
      assert.strictEqual(part1('dabAcCaCBAcCcaDA'), 10);
      assert.strictEqual(part1(input), 11152);
    });
  });
});
