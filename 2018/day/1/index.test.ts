import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1, part2 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n').map(Number);

describe('day-01', () => {
  describe('Part 1', () => {
    it('should return resulting frequency', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(529);
    });
  });

  describe('Part 2', () => {
    it('should find first frequency reached twice', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(464);
    });
  });
});
