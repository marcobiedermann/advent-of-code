// https://github.com/viliampucik/adventofcode/blob/master/2022/07.py

import { readFileSync } from 'node:fs';

const input = readFileSync(`${__dirname}/input.sample`, 'utf-8');

function isCommand(str: string) {
  return /^\$/.test(str);
}

function parseCommand(str: string) {
  const { groups } = str.match(/^\$ (?<command>.*)( (?<args>.*))?/) || [];

  if (!groups) {
    throw new Error('Invalid command');
  }

  const { command, args } = groups;

  return {
    command,
    args,
  };
}

function part1(input: string) {
  // console.log({ lines: input.split('\n') });

  const lines = input.split('\n');
  let path: string[] = [];
  const dirs = {};

  lines.forEach((line) => {
    if (isCommand(line)) {
      const { command, args } = parseCommand(line);

      command;
      if (command === 'cd') {
        if (args === '/') {
          path = ['/'];
        } else if (args === '..') {
          path.pop();
        } else {
          //
        }
      }
    }
  });
}

part1(input);

// export { part1, part2 };
