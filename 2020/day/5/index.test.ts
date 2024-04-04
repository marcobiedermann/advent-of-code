import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should return highest seat on boarding pass', () => {
      expect.assertions(5);

      expect(part1(['FBFBBFFRLR'])).toStrictEqual(357);
      expect(part1(['BFFFBBFRRR'])).toStrictEqual(567);
      expect(part1(['FFFBBBFRRR'])).toStrictEqual(119);
      expect(part1(['BBFFBBFRLL'])).toStrictEqual(820);
      expect(part1(input)).toStrictEqual(970);
    });
  });

  describe('Part 2', () => {
    it('should return the ID of seat', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(587);
    });
  });
});
