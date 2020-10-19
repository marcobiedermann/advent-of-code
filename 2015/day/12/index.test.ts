import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8')

describe('Day 12', () => {
  describe('Part 1', () => {
    it('should sum up app numbers in JSON object', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(119433);
    });
  });
});
