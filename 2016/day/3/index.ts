function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && b + c > a && a + c > b;
}

function transpose(triangles: number[][]): number[][] {
  const transposed = [];

  for (let i = 0; i < triangles.length; i += 3) {
    for (let j = 0; j < 3; j += 1) {
      transposed.push([triangles[i][j], triangles[i + 1][j], triangles[i + 2][j]]);
    }
  }

  return transposed;
}

function parseLine(line: string): number[] {
  return line
    .trim()
    .split(/\s+/)
    .map((side) => parseInt(side, 10));
}

function parseLines(lines: string[]): number[][] {
  return lines.map(parseLine);
}

function part1(input: string[]): number {
  return parseLines(input).filter((line) => {
    const [a, b, c] = line;

    return isTriangle(a, b, c);
  }).length;
}

function part2(input: string[]): number {
  return transpose(parseLines(input)).filter((line) => {
    const [a, b, c] = line;

    return isTriangle(a, b, c);
  }).length;
}

export { part1, part2 };
