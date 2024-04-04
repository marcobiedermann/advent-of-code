import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = await readFile(`${__dirname}/input`, 'utf-8');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return floor number', () => {
      expect.assertions(10);

      expect(part1('(())')).toStrictEqual(0);
      expect(part1('()()')).toStrictEqual(0);

      expect(part1('(((')).toStrictEqual(3);
      expect(part1('(()(()(')).toStrictEqual(3);

      expect(part1('))(((((')).toStrictEqual(3);

      expect(part1('())')).toStrictEqual(-1);
      expect(part1('))(')).toStrictEqual(-1);

      expect(part1(')))')).toStrictEqual(-3);
      expect(part1(')())())')).toStrictEqual(-3);

      expect(part1(input)).toStrictEqual(280);
    });
  });

  describe('Part 2', () => {
    it('should return index of the first character to enter the basement', () => {
      expect.assertions(3);

      expect(part2(')')).toStrictEqual(1);
      expect(part2('()())')).toStrictEqual(5);
      expect(part2(input)).toStrictEqual(1797);
    });
  });
});
