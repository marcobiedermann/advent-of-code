import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');
const inputSample = (await readFile(`${import.meta.dirname}/input.sample`, 'utf-8')).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return the number of overlapping claims', () => {
      assert.strictEqual(part1(inputSample), 4);
      assert.strictEqual(part1(input), 110546);
    });
  });
});
