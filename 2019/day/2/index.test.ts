import { readFileSync } from 'fs';
import { part1 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8');
const data = input.split(',').map(Number);

describe('day-01', () => {
  describe('Part 1', () => {
    it('should run instructions of operators', () => {
      expect.assertions(1);

      expect(part1(data)[0]).toStrictEqual(5866663);
    });
  });
});
