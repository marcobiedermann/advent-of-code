import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should find the two entries that sum to 2020', () => {
      expect.assertions(2);

      expect(part1([1721, 979, 366, 299, 675, 1456], 2020)).toStrictEqual(514579);
      expect(part1(input, 2020)).toStrictEqual(902451);
    });
  });
});
