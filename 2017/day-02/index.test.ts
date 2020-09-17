import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input.txt`, 'utf-8')
  .split('\n')
  .map((row) => row.split('\t').map(Number));

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should calculate the spreadsheet’s checksum', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(45158);
    });
  });
});
