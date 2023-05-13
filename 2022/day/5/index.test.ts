import { readFileSync } from 'node:fs';
import { part1, part2 } from '.';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');
const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

describe('Day 4', () => {
  describe('Part 1', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part1(sample)).toStrictEqual('CMZ');
      expect(part1(input)).toStrictEqual('TDCHVHJTG');
    });
  });

  describe('Part 2', () => {
    it('should', () => {
      expect.assertions(2);

      expect(part2(sample)).toStrictEqual('MCD');
      expect(part2(input)).toStrictEqual('NGCMPJLHV');
    });
  });
});
