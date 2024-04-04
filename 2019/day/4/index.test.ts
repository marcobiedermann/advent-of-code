import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const [lower, upper] = readFileSync(`${__dirname}/input`, 'utf-8').split('-').map(Number);

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should return number of valid passwords', () => {
      expect.assertions(4);

      expect(part1(111111)).toStrictEqual(1);
      expect(part1(223450)).toStrictEqual(0);
      expect(part1(123789)).toStrictEqual(0);
      expect(part1(lower, upper)).toStrictEqual(1605);
    });
  });

  describe('Part 2', () => {
    it('should return number of valid passwords', () => {
      expect.assertions(4);

      expect(part2(112233)).toStrictEqual(1);
      expect(part2(123444)).toStrictEqual(0);
      expect(part2(111122)).toStrictEqual(1);
      expect(part2(lower, upper)).toStrictEqual(1102);
    });
  });
});
