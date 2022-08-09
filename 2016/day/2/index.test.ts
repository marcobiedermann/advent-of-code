import { readFileSync } from 'node:fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const inputSample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');

describe('Day 2', () => {
  describe('Part 1', () => {
    it('should return the bathroom code', () => {
      expect.assertions(2);

      expect(part1(inputSample)).toStrictEqual('1985');
      expect(part1(input)).toStrictEqual('24862');
    });
  });
});
