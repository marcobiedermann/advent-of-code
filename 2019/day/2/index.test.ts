import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split(',').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return result at position `0`', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(5866663);
    });
  });

  describe('Part 2', () => {
    it('should find noun and verb resulting in target', () => {
      expect.assertions(1);

      expect(part2(input, 19690720)).toStrictEqual(4259);
    });
  });
});
