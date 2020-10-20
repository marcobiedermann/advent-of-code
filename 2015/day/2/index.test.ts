import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return total square feet of wrapping paper', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(1598415);
    });
  });

  describe('Part 2', () => {
    it('should return total feet of ribbon', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(3812909);
    });
  });
});
