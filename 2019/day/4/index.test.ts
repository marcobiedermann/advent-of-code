import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const [lower, upper] = (await getInput(import.meta.dirname)).split('-').map(Number);

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should return number of valid passwords', () => {
      assert.strictEqual(part1(111111), 1);
      assert.strictEqual(part1(223450), 0);
      assert.strictEqual(part1(123789), 0);
      assert.strictEqual(part1(lower, upper), 1605);
    });
  });

  describe('Part 2', () => {
    it('should return number of valid passwords', () => {
      assert.strictEqual(part2(112233), 1);
      assert.strictEqual(part2(123444), 0);
      assert.strictEqual(part2(111122), 1);
      assert.strictEqual(part2(lower, upper), 1102);
    });
  });
});
