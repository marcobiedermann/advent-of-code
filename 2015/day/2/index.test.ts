import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return total square feet of wrapping paper', () => {
      expect.assertions(3);

      expect(part1(['2x3x4'])).toStrictEqual(58);
      expect(part1(['1x1x10'])).toStrictEqual(43);
      expect(part1(input)).toStrictEqual(1598415);
    });
  });

  describe('Part 2', () => {
    it('should return total feet of ribbon', () => {
      expect.assertions(3);

      expect(part2(['2x3x4'])).toStrictEqual(34);
      expect(part2(['1x1x10'])).toStrictEqual(14);
      expect(part2(input)).toStrictEqual(3812909);
    });
  });
});
