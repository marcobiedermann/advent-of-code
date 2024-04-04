import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should count valid passwords', () => {
      expect.assertions(2);

      expect(part1(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toStrictEqual(2);
      expect(part1(input)).toStrictEqual(422);
    });
  });

  describe('Part 2', () => {
    it('should count valid passwords', () => {
      expect.assertions(2);

      expect(part2(['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'])).toStrictEqual(1);
      expect(part2(input)).toStrictEqual(451);
    });
  });
});
