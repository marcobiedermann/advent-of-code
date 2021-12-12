function part1(strings: string[]): number {
  const niceStrings = strings.filter(
    (string) =>
      /([aeiou].*?){3,}/.test(string) && /([a-z])\1/.test(string) && !/(ab|cd|pq|xy)/.test(string),
  );

  return niceStrings.length;
}

function part2(strings: string[]): number {
  const niceStrings = strings.filter(
    (string) => /([a-z][a-z]).*\1/.test(string) && /([a-z])\w\1/.test(string),
  );

  return niceStrings.length;
}

export { part1, part2 };
