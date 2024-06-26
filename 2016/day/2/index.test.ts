import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');
const inputSample = (await readFile(`${__dirname}/input.sample`, 'utf-8')).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the bathroom code', () => {
      expect.assertions(2);

      expect(part1(inputSample)).toStrictEqual('1985');
      expect(part1(input)).toStrictEqual('24862');
    });
  });

  describe('Part 2', () => {
    it('should return the bathroom code', () => {
      expect.assertions(2);

      expect(part2(inputSample)).toStrictEqual('5DB3');
      expect(part2(input)).toStrictEqual('46C91');
    });
  });
});
