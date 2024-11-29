import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n\n');

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should return number of valid passports', () => {
      assert.strictEqual(part1(input), 228);
    });
  });

  describe('Part 2', () => {
    it('should return number of valid passports', () => {
      assert.strictEqual(part2(input), 175);
    });
  });
});
