import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1, part2 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');
const inputSample = (await getInputSample(import.meta.dirname)).split('\n');

describe('2016 Day 6', () => {
  describe('Part 1', () => {
    it('should get the error-corrected version of the message', () => {
      assert.strictEqual(part1(inputSample), 'easter');
      assert.strictEqual(part1(input), 'xdkzukcf');
    });
  });

  describe('Part 2', () => {
    it('should get the error-corrected version of the message', () => {
      assert.strictEqual(part2(inputSample), 'advent');
      assert.strictEqual(part2(input), 'cevsgyvd');
    });
  });
});
