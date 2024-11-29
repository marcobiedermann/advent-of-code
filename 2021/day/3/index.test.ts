import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');
const sampleInput = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

describe('2021 Day 3', () => {
  describe('Part 1', () => {
    it('should calculate the power consumption of the submarine?', () => {
      assert.strictEqual(part1(sampleInput), 198);
      assert.strictEqual(part1(input), 841526);
    });
  });

  describe('Part 2', () => {
    it('should calculate the life support rating of the submarine', () => {
      assert.strictEqual(part2(sampleInput), 230);
      assert.strictEqual(part2(input), 4790390);
    });
  });
});
