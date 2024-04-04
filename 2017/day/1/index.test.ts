import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('').map(Number);

describe('Day 1', () => {
  describe('Part 1', () => {
    it('should return the sum of all digits that match the next digit in the list', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(1097);
    });
  });
});
