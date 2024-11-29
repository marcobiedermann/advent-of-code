import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');
const inputSample = (await getInputSample(import.meta.dirname)).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the bathroom code', () => {
      assert.strictEqual(part1(inputSample), '1985');
      assert.strictEqual(part1(input), '24862');
    });
  });

  describe('Part 2', () => {
    it('should return the bathroom code', () => {
      assert.strictEqual(part2(inputSample), '5DB3');
      assert.strictEqual(part2(input), '46C91');
    });
  });
});
