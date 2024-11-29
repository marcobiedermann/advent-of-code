import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname))
  .split('\n')
  .map((row) => row.split('\t').map(Number));

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should calculate the spreadsheet’s checksum', () => {
      assert.strictEqual(part1(input), 45158);
    });
  });
});
