import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

describe('2015 Day 3', () => {
  describe('Part 1', () => {
    it('should return number of unique locations visited', () => {
      expect.assertions(4);

      expect(part1('>')).toStrictEqual(2);
      expect(part1('^>v<')).toStrictEqual(4);
      expect(part1('^v^v^v^v^v')).toStrictEqual(2);
      expect(part1(input)).toStrictEqual(2081);
    });
  });

  describe('Part 2', () => {
    it('should return number of unique locations visited by santa and robo-santa', () => {
      expect.assertions(4);

      expect(part2('^v')).toStrictEqual(3);
      expect(part2('^>v<')).toStrictEqual(3);
      expect(part2('^v^v^v^v^v')).toStrictEqual(11);
      expect(part2(input)).toStrictEqual(2341);
    });
  });
});
