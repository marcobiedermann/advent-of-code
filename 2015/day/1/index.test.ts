import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return floor number', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(280);
    });
  });
});
