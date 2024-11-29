import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = await readFile(`${import.meta.dirname}/input`, 'utf-8');

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should return the number of remaining units', () => {
      assert.strictEqual(part1('dabAcCaCBAcCcaDA'), 10);
      assert.strictEqual(part1(input), 11152);
    });
  });
});
