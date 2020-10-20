/* eslint-disable import/prefer-default-export */

function part1(input: string[]): number {
  const niceWords = input
    .filter((word) => /[aeiou].*?[aeiou].*?[aeiou]/.test(word))
    .filter((word) => /(\w)\1/.test(word))
    .filter((word) => !/(ab|cd|pq|xy)/.test(word));

  return niceWords.length;
}

export { part1 };
