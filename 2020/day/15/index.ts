function part1(numbers: number[], n: number): number {
  const lastSpoken = new Map<number, number>();
  let lastNumber = numbers[numbers.length - 1];

  numbers.forEach((number, index) => lastSpoken.set(number, index + 1));

  for (let i = numbers.length; i < n; i += 1) {
    const next = lastSpoken.has(lastNumber) ? i - (lastSpoken.get(lastNumber) || 0) : 0;

    lastSpoken.set(lastNumber, i);
    lastNumber = next;
  }

  return lastNumber;
}

function part2(numbers: number[], n: number): number {
  return part1(numbers, n);
}

export { part1, part2 };
