import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return number of unique locations visited', () => {
      expect.assertions(4);

      expect(part1('>')).toStrictEqual(2);
      expect(part1('^>v<')).toStrictEqual(4);
      expect(part1('^v^v^v^v^v')).toStrictEqual(2);
      expect(part1(input)).toStrictEqual(2081);
    });
  });
});
