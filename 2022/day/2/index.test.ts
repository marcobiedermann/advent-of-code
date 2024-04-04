import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');
const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the total score', () => {
      expect.assertions(2);

      expect(part1(sample)).toStrictEqual(15);
      expect(part1(input)).toStrictEqual(15422);
    });
  });

  describe('Part 2', () => {
    it('should return the total score', () => {
      expect.assertions(2);

      expect(part2(sample)).toStrictEqual(12);
      expect(part2(input)).toStrictEqual(15442);
    });
  });
});
