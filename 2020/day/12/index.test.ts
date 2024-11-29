import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');
const exampleInput = ['F10', 'N3', 'F7', 'R90', 'F11'];

describe('Day 12', () => {
  describe('Part 1', () => {
    it('should', () => {
      assert.strictEqual(part1(exampleInput), 25);
      assert.strictEqual(part1(input), 938);
    });
  });

  describe.skip('Part 2', () => {
    it('should', () => {
      assert.strictEqual(part2(exampleInput), 286);
      assert.strictEqual(part2(input), 54404);
    });
  });
});
