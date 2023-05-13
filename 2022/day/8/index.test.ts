import { readFileSync } from 'node:fs';
import { part1, part2 } from '.';

const input = readFileSync(`${__dirname}/input`, 'utf-8');

describe('Day 8', () => {
  describe('Part 1', () => {
    it('should find the number of characters that need to be processed before the first start-of-package marker', () => {
      expect.assertions(5);

      expect(part1('bvwbjplbgvbhsrlpgdmjqwftvncz')).toStrictEqual(5);
      expect(part1('nppdvjthqldpwncqszvftbrmjlhg')).toStrictEqual(6);
      expect(part1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toStrictEqual(10);
      expect(part1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toStrictEqual(11);
      expect(part1(input)).toStrictEqual(1155);
    });
  });

  describe('Part 2', () => {
    it('should find the number of characters that need to be processed before the first start-of-package marker', () => {
      expect.assertions(6);

      expect(part2('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toStrictEqual(19);
      expect(part2('bvwbjplbgvbhsrlpgdmjqwftvncz')).toStrictEqual(23);
      expect(part2('nppdvjthqldpwncqszvftbrmjlhg')).toStrictEqual(23);
      expect(part2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toStrictEqual(29);
      expect(part2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toStrictEqual(26);
      expect(part2(input)).toStrictEqual(2789);
    });
  });
});
