import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');
const inputSample = (await readFile(`${__dirname}/input.sample`, 'utf-8')).split('\n');

describe('Day 3', () => {
  describe('Part 1', () => {
    it('should return the number of overlapping claims', () => {
      expect.assertions(2);

      expect(part1(inputSample)).toStrictEqual(4);
      expect(part1(input)).toStrictEqual(110546);
    });
  });
});
