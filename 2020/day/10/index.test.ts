import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);
const exampleInput = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
const largerExampleInput = [
  28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7,
  9, 4, 2, 34, 10, 3,
];

describe('Day 10', () => {
  describe('Part 1', () => {
    it('should return difference in jolt', () => {
      expect.assertions(3);

      expect(part1(exampleInput)).toStrictEqual(35);
      expect(part1(largerExampleInput)).toStrictEqual(220);
      expect(part1(input)).toStrictEqual(2380);
    });
  });

  describe('Part 2', () => {
    it('should return number of different arrangements', () => {
      expect.assertions(3);

      expect(part2(exampleInput)).toStrictEqual(8);
      expect(part2(largerExampleInput)).toStrictEqual(19208);
      expect(part2(input)).toStrictEqual(48358655787008);
    });
  });
});
