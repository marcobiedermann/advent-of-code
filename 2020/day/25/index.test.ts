import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n').map(Number);

describe('Day 25', () => {
  describe('Part 1', () => {
    it('should return the encryption key', () => {
      expect.assertions(2);

      expect(part1([5764801, 17807724])).toStrictEqual(14897079);
      expect(part1(input)).toStrictEqual(17673381);
    });
  });
});
