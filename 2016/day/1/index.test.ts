import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split(', ');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should calculate the distance from the center', () => {
      expect.assertions(5);

      expect(part1(['R2', 'L3'])).toStrictEqual(5);
      expect(part1(['R2', 'R2', 'R2'])).toStrictEqual(2);
      expect(part1(['R5', 'L5', 'R5', 'R3'])).toStrictEqual(12);
      expect(part1(['R5', 'L5', 'R5', 'R3'])).toStrictEqual(12);
      expect(part1(input)).toStrictEqual(253);
    });
  });
});
