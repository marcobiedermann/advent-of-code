import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n\n');
const sample = (await getInputSample(import.meta.dirname)).split('\n\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should find the elf carrying the most calories', () => {
      assert.strictEqual(part1(sample), 24000);
      assert.strictEqual(part1(input), 71502);
    });
  });

  describe('Part 2', () => {
    it('should find the top three elves carrying the most calories', () => {
      assert.strictEqual(part2(sample), 45000);
      assert.strictEqual(part2(input), 208191);
    });
  });
});
