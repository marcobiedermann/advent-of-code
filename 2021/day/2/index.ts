function part1(steps: string[]): number {
  let horizontalPosition = 0;
  let depth = 0;

  steps.forEach((step) => {
    const [direction, length] = step.split(' ');
    const parsedLength = parseInt(length, 10);

    if (direction === 'forward') {
      horizontalPosition += parsedLength;
    }

    if (direction === 'down') {
      depth += parsedLength;
    }

    if (direction === 'up') {
      depth -= parsedLength;
    }
  });

  return horizontalPosition * depth;
}

function part2(steps: string[]): number {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  steps.forEach((step) => {
    const [direction, length] = step.split(' ');
    const parsedLength = parseInt(length, 10);

    if (direction === 'forward') {
      horizontalPosition += parsedLength;
      depth += aim * parsedLength;
    }

    if (direction === 'down') {
      aim += parsedLength;
    }

    if (direction === 'up') {
      aim -= parsedLength;
    }
  });

  return horizontalPosition * depth;
}

export { part1, part2 };
