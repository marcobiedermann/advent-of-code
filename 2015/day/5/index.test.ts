import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('2015 Day 5', () => {
  describe('Part 1', () => {
    it('should filter out nice words', () => {
      expect.assertions(2);

      expect(
        part1([
          'ugknbfddgicrmopn',
          'aaa',
          'jchzalrnumimnmhp',
          'haegwjzuvuyypxyu',
          'dvszwmarrgswjxmb',
        ]),
      ).toStrictEqual(2);
      expect(part1(input)).toStrictEqual(255);
    });
  });

  describe('Part 2', () => {
    it('should filter out nice words', () => {
      expect.assertions(2);

      expect(
        part2(['qjhvhtzxzqqjkmpb', 'xxyxx', 'uurcxstgmygtbstg', 'ieodomkazucvgmuy']),
      ).toStrictEqual(2);
      expect(part2(input)).toStrictEqual(55);
    });
  });
});
