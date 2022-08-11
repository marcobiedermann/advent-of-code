import { readFileSync } from 'fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const inputSample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');

describe('2016 Day 6', () => {
  describe('Part 1', () => {
    it('should get the error-corrected version of the message', () => {
      expect.assertions(2);

      expect(part1(inputSample)).toStrictEqual('easter');
      expect(part1(input)).toStrictEqual('xdkzukcf');
    });
  });

  describe('Part 2', () => {
    it('should get the error-corrected version of the message', () => {
      expect.assertions(2);

      expect(part2(inputSample)).toStrictEqual('advent');
      expect(part2(input)).toStrictEqual('cevsgyvd');
    });
  });
});
