import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split(',').map(Number);
const sampleInput = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

describe('2021 Day 7', () => {
  describe('Part 1', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(37);
      expect(part1(input)).toStrictEqual(337833);
    });
  });

  describe('Part 2', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(206);
      expect(part2(input)).toStrictEqual(96678050);
    });
  });
});
