import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = await readFile(`${import.meta.dirname}/input`, 'utf-8');

describe('Day 12', () => {
  describe('Part 1', () => {
    it('should sum up app numbers in JSON object', () => {
      assert.strictEqual(part1(input), 119433);
    });
  });
});
