import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8'))
  .split('\n')
  .map((row) => row.split('\t').map(Number));

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should calculate the spreadsheet’s checksum', () => {
      assert.strictEqual(part1(input), 45158);
    });
  });
});
