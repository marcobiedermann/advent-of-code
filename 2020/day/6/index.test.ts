import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n\n');
const sampleInput = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n\n');

describe('Day 6', () => {
  describe('Part 1', () => {
    it('should return count of some answers', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(11);
      expect(part1(input)).toStrictEqual(6161);
    });
  });

  describe('Part 2', () => {
    it('should return count of all answers', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(6);
      expect(part2(input)).toStrictEqual(2971);
    });
  });
});
