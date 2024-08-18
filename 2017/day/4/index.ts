function part1(passphrases: string[]): number {
  return passphrases.filter((passphrase) => {
    const words = passphrase.split(' ');
    const uniqueWords = new Set(words);

    return words.length === uniqueWords.size;
  }).length;
}

export { part1 };
