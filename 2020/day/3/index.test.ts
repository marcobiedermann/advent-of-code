import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { describe, it } from 'node:test';
import type { Slope } from './index.ts';
import { part1, part2 } from './index.ts';

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
const input = (await readFile(`${import.meta.dirname}/input`, 'utf-8')).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return number of trees', () => {
      const slope: Slope = [3, 1];

      assert.strictEqual(part1(exampleInput, slope), 7);
      assert.strictEqual(part1(input, slope), 145);
    });
  });

  describe('Part 2', () => {
    it('should return number of trees on all slopes', () => {
      const slopes: Slope[] = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
      ];

      assert.strictEqual(part2(exampleInput, slopes), 336);
      assert.strictEqual(part2(input, slopes), 3424528800);
    });
  });
});
