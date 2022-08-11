import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split(',').map(Number);
const sampleInput = [3, 4, 3, 1, 2];

describe('2021 Day 6', () => {
  describe('Part 1', () => {
    it('should calculate the population size after 80 days', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(5934);
      expect(part1(input)).toStrictEqual(365131);
    });
  });

  describe('Part 2', () => {
    it('should calculate the population size after 80 days', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(26984457539);
      expect(part2(input)).toStrictEqual(1650309278600);
    });
  });
});
