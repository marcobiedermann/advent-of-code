import { part1, part2 } from '.';

const input = '1113122113'

describe('Day 10', () => {
  describe('Part 1', () => {
    it('should process 40 iterations', () => {
      expect.assertions(1);

      expect(part1(input)).toStrictEqual(360154);
    });
  });

  describe('Part 2', () => {
    it('should process 50 iterations', () => {
      expect.assertions(1);

      expect(part2(input)).toStrictEqual(5103798);
    });
  });
});
