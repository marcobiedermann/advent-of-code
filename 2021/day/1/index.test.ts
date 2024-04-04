import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);
const sampleInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe('2021 Day 1', () => {
  describe('Part 1', () => {
    it('should count the number of times a depth measurement increases', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(7);
      expect(part1(input)).toStrictEqual(1759);
    });
  });

  describe('Part 2', () => {
    it('should count the number of times the sum of measurements in this sliding window increases', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(5);
      expect(part2(input)).toStrictEqual(1805);
    });
  });
});
