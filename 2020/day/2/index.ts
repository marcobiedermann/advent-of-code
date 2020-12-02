/* eslint-disable import/prefer-default-export */

interface ParsedInput {
  lowest: number;
  highest: number;
  letter: string;
  password: string;
}

function parseInput(input: string): ParsedInput {
  const { groups } =
    input.match(/(?<lowest>\d+)-(?<highest>\d+) (?<letter>\w+): (?<password>\w+)/) || [];

  if (!groups) {
    throw new Error('Invalid Input');
  }

  const { lowest, highest, letter, password } = groups;

  return {
    lowest: parseInt(lowest, 10),
    highest: parseInt(highest, 10),
    letter,
    password,
  };
}

function getOccurrences(password: string, letter: string): number {
  const regex = new RegExp(letter, 'g');
  const matches = password.match(regex) || [];

  return matches.length;
}

function part1(inputList: string[]): number {
  return inputList.filter((input) => {
    const { lowest, highest, letter, password } = parseInput(input);
    const occurrences = getOccurrences(password, letter);

    return lowest <= occurrences && occurrences <= highest;
  }).length;
}

export { part1 };
