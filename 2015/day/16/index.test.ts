import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 16', () => {
  describe('Part 1', () => {
    it('should find the number of the Sue that got you the gift ', () => {
      assert.strictEqual(part1(input), 373);
    });
  });
});
