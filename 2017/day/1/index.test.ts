import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return the sum of all digits that match the next digit in the list', () => {
      assert.strictEqual(part1(input), 1097);
    });
  });
});
