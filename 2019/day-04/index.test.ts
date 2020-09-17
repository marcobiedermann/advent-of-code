import { readFileSync } from 'fs';
import { part1 } from '.';

const [lower, upper] = readFileSync(`${__dirname}/input.txt`, 'utf-8').split('-').map(Number);

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should return number valid passwords withing the range', () => {
      expect.assertions(1);

      expect(part1(lower, upper)).toStrictEqual(1605);
    });
  });
});
