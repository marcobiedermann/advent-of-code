import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { part1 } from '.';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the checksum of boxes containing two or three unique letters', () => {
      expect.assertions(2);

      expect(
        part1(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']),
      ).toStrictEqual(12);
      expect(part1(input)).toStrictEqual(5727);
    });
  });
});
