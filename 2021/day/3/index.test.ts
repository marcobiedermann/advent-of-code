import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');
const sampleInput = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

describe('2021 Day 3', () => {
  describe('Part 1', () => {
    it('should calculate the power consumption of the submarine?', () => {
      expect.assertions(2);

      expect(part1(sampleInput)).toStrictEqual(198);
      expect(part1(input)).toStrictEqual(841526);
    });
  });

  describe('Part 2', () => {
    it('should calculate the life support rating of the submarine', () => {
      expect.assertions(2);

      expect(part2(sampleInput)).toStrictEqual(230);
      expect(part2(input)).toStrictEqual(4790390);
    });
  });
});
