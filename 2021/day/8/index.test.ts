import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const sampleInput = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');

describe('2021 Day 8', () => {
  describe('Part 1', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(26);
      expect(part1(input)).toStrictEqual(355);
    });
  });

  describe('Part 2', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(61229);
      expect(part2(input)).toStrictEqual(983030);
    });
  });
});
