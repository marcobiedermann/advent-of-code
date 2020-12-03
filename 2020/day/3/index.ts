export type Slope = [number, number];

function part1(lines: string[], slope: Slope, tree = '#'): number {
  const [right, down] = slope;
  let index = right;
  let trees = 0;

  for (let i = down; i < lines.length; i += down) {
    const line = lines[i];

    if (line[index] === tree) {
      trees += 1;
    }

    index = (index + right) % line.length;
  }

  return trees;
}

function part2(lines: string[], slopes: Slope[]): number {
  return slopes.reduce((accumulator, currentValue) => accumulator * part1(lines, currentValue), 1);
}

export { part1, part2 };
