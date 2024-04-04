import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should calculate total fuel', () => {
      expect.assertions(5);

      expect(part1([12])).toStrictEqual(2);
      expect(part1([14])).toStrictEqual(2);
      expect(part1([1969])).toStrictEqual(654);
      expect(part1([100756])).toStrictEqual(33583);
      expect(part1(input)).toStrictEqual(3239890);
    });
  });

  describe('Part 2', () => {
    it('should calculate total fuel', () => {
      expect.assertions(4);

      expect(part2([14])).toStrictEqual(2);
      expect(part2([1969])).toStrictEqual(966);
      expect(part2([100756])).toStrictEqual(50346);
      expect(part2(input)).toStrictEqual(4856963);
    });
  });
});
