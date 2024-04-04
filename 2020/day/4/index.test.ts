import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n\n');

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should return number of valid passports', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(228);
    });
  });

  describe('Part 2', () => {
    it('should return number of valid passports', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(175);
    });
  });
});
