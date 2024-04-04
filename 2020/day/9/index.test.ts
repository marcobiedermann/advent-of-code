import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);
const sampleInput = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n').map(Number);

describe('Day 9', () => {
  describe('Part 1', () => {
    it('should find largest number which can not be made up from two numbers', () => {
      expect.assertions(2);

      expect(part1(sampleInput, 5)).toStrictEqual(127);
      expect(part1(input)).toStrictEqual(507622668);
    });
  });

  describe('Part 2', () => {
    it('should should find smallest and largest number which can not be made up from two numbers', () => {
      expect.assertions(2);

      expect(part2(sampleInput, 127)).toStrictEqual(62);
      expect(part2(input, 507622668)).toStrictEqual(76688505);
    });
  });
});
