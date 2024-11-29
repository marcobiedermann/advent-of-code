import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import { part1, part2 } from './index.ts';

const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');
const sampleInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

describe('2021 Day 2', () => {
  describe('Part 1', () => {
    it('should calculate the horizontal position and depth after following the course', () => {
      assert.strictEqual(part1(sampleInput), 150);
      assert.strictEqual(part1(input), 1962940);
    });
  });

  describe('Part 2', () => {
    it('should calculate the horizontal position and depth after following the course', () => {
      assert.strictEqual(part2(sampleInput), 900);
      assert.strictEqual(part2(input), 1813664422);
    });
  });
});
