import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

describe('Day 16', () => {
  describe('Part 1', () => {
    it('should find the number of the Sue that got you the gift ', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(373);
    });
  });
});
