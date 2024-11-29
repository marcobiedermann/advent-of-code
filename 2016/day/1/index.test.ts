import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split(', ');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should calculate the distance from the center', () => {
      assert.strictEqual(part1(['R2', 'L3']), 5);
      assert.strictEqual(part1(['R2', 'R2', 'R2']), 2);
      assert.strictEqual(part1(['R5', 'L5', 'R5', 'R3']), 12);
      assert.strictEqual(part1(['R5', 'L5', 'R5', 'R3']), 12);
      assert.strictEqual(part1(input), 253);
    });
  });
});
