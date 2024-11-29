import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 14', () => {
  describe('Part 1', () => {
    it('should return the max distance', () => {
      assert.strictEqual(part1(input), 2660);
    });
  });
});
