function containsAtLeastThreeVowels(str: string): boolean {
  return /([aeiou].*?){3,}/.test(str);
}

function containsAtLeastOneRepetitiveLetter(str: string): boolean {
  return /([a-z])\1/.test(str);
}

function containingStrings(str: string): boolean {
  return /(ab|cd|pq|xy)/.test(str);
}

function containsAtLeastTwoTwoLettersWithoutOverlap(str: string): boolean {
  return /([a-z][a-z]).*\1/.test(str);
}

function containsAtLeastOneRepetitiveLetterWithLetterInBetween(str: string): boolean {
  return /([a-z])[a-z]\1/.test(str);
}

function part1(strings: string[]): number {
  return strings.filter(
    (string) =>
      containsAtLeastThreeVowels(string) &&
      containsAtLeastOneRepetitiveLetter(string) &&
      !containingStrings(string),
  ).length;
}

function part2(strings: string[]): number {
  return strings.filter(
    (string) =>
      containsAtLeastTwoTwoLettersWithoutOverlap(string) &&
      containsAtLeastOneRepetitiveLetterWithLetterInBetween(string),
  ).length;
}

export { part1, part2 };
