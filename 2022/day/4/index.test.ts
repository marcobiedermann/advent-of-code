import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');
const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should find the number of fully contained assignment sections', () => {
      expect.assertions(2);

      expect(part1(sample)).toStrictEqual(2);
      expect(part1(input)).toStrictEqual(511);
    });
  });

  describe('Part 2', () => {
    it('should find the number of overlapping assignment sections', () => {
      expect.assertions(2);

      expect(part2(sample)).toStrictEqual(4);
      expect(part2(input)).toStrictEqual(821);
    });
  });
});
