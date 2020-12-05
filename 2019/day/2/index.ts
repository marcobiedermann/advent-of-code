function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function part1(opcodes: number[], noun = 12, verb = 2): number {
  const codes = [...opcodes];

  codes[1] = noun;
  codes[2] = verb;

  let position = 0;

  while (codes[position] !== 99) {
    const opCode = codes[position];
    const inputAIndex = codes[position + 1];
    const inputA = codes[inputAIndex];
    const inputBIndex = codes[position + 2];
    const inputB = codes[inputBIndex];
    const outputIndex = codes[position + 3];

    if (opCode === 1) {
      codes[outputIndex] = add(inputA, inputB);
    }

    if (opCode === 2) {
      codes[outputIndex] = multiply(inputA, inputB);
    }

    position += 4;
  }

  return codes[0];
}

function part2(opcodes: number[], target: number): number {
  for (let noun = 0; noun < 100; noun += 1) {
    for (let verb = 0; verb < 100; verb += 1) {
      const result = part1(opcodes, noun, verb);

      if (result === target) {
        return 100 * noun + verb;
      }
    }
  }

  return -1;
}

export { part1, part2 };
