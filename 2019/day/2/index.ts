/* eslint-disable import/prefer-default-export */

function part1(opcodes: number[]): number[] {
  const codes = [...opcodes];

  codes[1] = 12;
  codes[2] = 2;

  for (let i = 0; i < codes.length; i += 4) {
    const opcode = codes[i];
    const inputA = codes[codes[i + 1]];
    const inputB = codes[codes[i + 2]];
    const outputIndex = codes[i + 3];

    if (opcode === 1) {
      codes[outputIndex] = inputA + inputB;
    } else if (opcode === 2) {
      codes[outputIndex] = inputA * inputB;
    } else if (opcode === 99) {
      break;
    } else {
      console.log('Invalid input');
    }
  }

  return codes;
}

export { part1 };
