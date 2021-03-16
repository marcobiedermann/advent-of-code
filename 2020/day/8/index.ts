// https://www.reddit.com/r/adventofcode/comments/k8xw8h/2020_day_08_solutions/
// https://pastebin.com/QYWyuynD

import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input.example`, 'utf-8').split('\n');

interface Instruction {
  argument: number;
  operation: string;
}

function parseInstruction(instruction: string): Instruction {
  const [operation, argument] = instruction.split(' ');

  return {
    operation,
    argument: parseInt(argument, 10),
  };
}

function parseInstructions(instructions: string[]): Instruction[] {
  return instructions.map(parseInstruction);
}

function run(instructions: Instruction[]) {
  const set = new Set();

  let accumulator = 0;
  let index = 0;

  while (!set.has(index)) {
    const { operation, argument } = instructions[index];

    set.add(index);

    if (operation === 'acc') {
      accumulator += argument;
      index += 1;
    }

    if (operation === 'jmp') {
      index += argument || 1;
    }

    if (operation === 'nop') {
      index += 1;
    }
  }

  return {
    accumulator,
    index,
  };
}

function part1(instructions: string[]): number {
  const parsedInstructions = parseInstructions(instructions);

  const { accumulator } = run(parsedInstructions);

  return accumulator;
}

//                  1134
// part1(input); // ?

//                  1205
// part2(input); // ?

// const allInstructions = input
//     .toString()
//     .split("\n")
//     .map((line) => line.split(" "));

// const changeInstructions = (instructions) => {
//     const nopIndexes = [];
//     const jmpIndexes = [];

//     instructions.forEach(([command, value], index) => {
//         if (command === "nop") {
//             nopIndexes.push([index, value]);
//         }

//         if (command === "jmp") {
//             jmpIndexes.push([index, value]);
//         }
//     });

//     const newInstructions = [];

//     jmpIndexes.forEach(([index, value]) => {
//         const clonedInstructions = [...instructions];
//         clonedInstructions[index] = ["nop", value];
//         newInstructions.push(clonedInstructions);
//     });

//     nopIndexes.forEach(([index, value]) => {
//         const clonedInstructions = [...instructions];
//         clonedInstructions[index] = ["jmp", value];
//         newInstructions.push(clonedInstructions);
//     });

//     return newInstructions;
// };

// const testInstructions = (newInstructions) => {
//     const history = [];

//     let index = 0;
//     let accumulator = 0;
//     let finished = false;

//     while (!finished) {
//         const [instruction, value] = newInstructions[index];
//         if (instruction === "nop") {
//             index += 1;
//         }
//         if (instruction === "acc") {
//             accumulator += Number(value);
//             index += 1;
//         }
//         if (instruction === "jmp") {
//             index += Number(value);
//         }

//         if (index === newInstructions.length) {
//             console.log("finished");
//             console.log({ accumulator });
//             finished = true;
//         }

//         if (history.includes(index)) {
//             finished = true;
//         }

//         history.push(index);
//     }
// };

// changeInstructions(allInstructions).forEach((currentInstructions) => {
//     testInstructions(currentInstructions);
// });

function changeInstructions(instructions: Instruction[]): Instruction[][] {
  const changedInstructions = [instructions];

  instructions.forEach((instruction, index) => {
    const start = instructions.slice(0, index);
    const end = instructions.slice(index + 1);

    const mappedInstruction = instruction;

    if (instruction.operation === 'jmp') {
      mappedInstruction.operation = 'nop';
    }

    if (instruction.operation === 'nop') {
      mappedInstruction.operation = 'jmp';
    }

    const changedInstruction = [...start, mappedInstruction, ...end];

    changedInstructions.push(changedInstruction);
  });

  return changedInstructions;
}

function part2(instructions: string[]) {
  const parsedInstructions = parseInstructions(instructions);
  const changedInstructions = changeInstructions(parsedInstructions);

  for (let i = 0; i < changedInstructions.length; i += 1) {
    const { accumulator, index } = run(changedInstructions[i]);

    if (index === instructions.length) {
      return accumulator;
    }
  }
}

part2(input); // ?

export { part1, part2 };
