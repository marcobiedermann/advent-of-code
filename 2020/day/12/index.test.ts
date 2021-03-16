import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const exampleInput = ['F10', 'N3', 'F7', 'R90', 'F11'];

describe('Day 12', () => {
  describe('Part 1', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part1(exampleInput)).toStrictEqual(25);
      expect(part1(input)).toStrictEqual(938);
    });
  });

  describe('Part 2', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part2(exampleInput)).toStrictEqual(286);
      expect(part2(input)).toStrictEqual(54404);
    });
  });
});
