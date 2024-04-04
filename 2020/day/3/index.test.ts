import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { Slope, part1, part2 } from '.';

const exampleInput = `..##.........##.........##.........##.........##.........##.......
#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....
.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
.#........#.#........#.#........#.#........#.#........#.#........#
#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
#...##....##...##....##...##....##...##....##...##....##...##....#
.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#`.split('\n');
const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return number of trees', () => {
      expect.assertions(2);

      const slope: Slope = [3, 1];

      expect(part1(exampleInput, slope)).toStrictEqual(7);
      expect(part1(input, slope)).toStrictEqual(145);
    });
  });

  describe('Part 2', () => {
    it('should return number of trees on all slopes', () => {
      expect.assertions(2);

      const slopes: Slope[] = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ];

      expect(part2(exampleInput, slopes)).toStrictEqual(336);
      expect(part2(input, slopes)).toStrictEqual(3424528800);
    });
  });
});
