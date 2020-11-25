import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 14', () => {
  describe('Part 1', () => {
    it('should return the max distance', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(2660);
    });
  });
});
