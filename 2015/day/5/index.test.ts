import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n')

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should filter out nice words', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(255);
    });
  });
});
