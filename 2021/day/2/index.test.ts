import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const sampleInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

describe('2021 Day 2', () => {
  describe('Part 1', () => {
    it('should calculate the horizontal position and depth after following the course', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(150);
      expect(part1(input)).toStrictEqual(1962940);
    });
  });

  describe('Part 2', () => {
    it('should calculate the horizontal position and depth after following the course', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(900);
      expect(part2(input)).toStrictEqual(1813664422);
    });
  });
});
