import { readFileSync } from 'node:fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

describe('Day 5', () => {
  describe('Part 1', () => {
    it('should return the number of remaining units', () => {
      expect.assertions(2);

      expect(part1('dabAcCaCBAcCcaDA')).toStrictEqual(10);
      expect(part1(input)).toStrictEqual(11152);
    });
  });
});
