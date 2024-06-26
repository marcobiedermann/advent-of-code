import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

describe('2016 Day 3', () => {
  describe('Part 1', () => {
    it('should return number of possible triangles', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(983);
    });
  });

  describe('Part 2', () => {
    it('should return number of possible triangles', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(1836);
    });
  });
});
