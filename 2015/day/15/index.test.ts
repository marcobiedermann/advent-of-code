import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 15', () => {
  describe('Part 1', () => {
    it('should', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(0);
    });
  });
});
