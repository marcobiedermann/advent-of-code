import { readFileSync } from 'node:fs';

const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8');

function parseMove(move: string) {
  const { groups } = move.match(/move (?<amount>\d+) from (?<from>\d+) to (?<to>\d+)/) || [];

  if (!groups) {
    throw new Error('Invalid Input');
  }

  const { amount, from, to } = groups;

  return {
    amount: parseInt(amount, 10),
    from: parseInt(from, 10),
    to: parseInt(to, 10),
  };
}

function parseMoves(moves: string) {
  return moves.split('\n').map(parseMove);
}

function parseStacks(stacks: string) {
  const s = stacks.split('\n');

  const stackss = {};

  s.forEach((line) => {
    for (let i = 0; i < line.length; i += 4) {
      let stack = i / 4 + 1;
      let crate = line.substring(i, i + 4).match(/\w/g);

      crate;
    }
  });
}

function parseRearrangeProcedure(rearrangementProcedure: string) {
  const [stacks, moves] = rearrangementProcedure.split('\n\n');

  const parsedStacks = parseStacks(stacks);
  const parsedMoves = parseMoves(moves);

  return {
    moves: parsedMoves,
  };
}

parseRearrangeProcedure(sample);
