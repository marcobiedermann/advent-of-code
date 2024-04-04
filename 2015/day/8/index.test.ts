import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

describe('Day 8', () => {
  describe('Part 1', () => {
    it('should return the number of characters', () => {
      expect.assertions(2);

      expect(part1(['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'])).toStrictEqual(12);
      expect(part1(input)).toStrictEqual(1350);
    });
  });
});
