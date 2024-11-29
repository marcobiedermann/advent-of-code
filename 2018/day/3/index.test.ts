import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getInput, getInputSample } from '../../../utils/file.ts';
import { part1 } from './index.ts';

const input = (await getInput(import.meta.dirname)).split('\n');
const inputSample = (await getInputSample(import.meta.dirname)).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return the number of overlapping claims', () => {
      assert.strictEqual(part1(inputSample), 4);
      assert.strictEqual(part1(input), 110546);
    });
  });
});
