import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 6', () => {
  describe('Part 1', () => {
    it('should could could lit lights', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(377891);
    });
  });

  describe('Part 2', () => {
    it('should return the total brightness', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(14110788);
    });
  });
});
