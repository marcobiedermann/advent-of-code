import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = await getInput(import.meta.dirname);

describe('Day 12', () => {
  describe('Part 1', () => {
    it('should sum up app numbers in JSON object', () => {
      assert.strictEqual(part1(input), 119433);
    });
  });
});
