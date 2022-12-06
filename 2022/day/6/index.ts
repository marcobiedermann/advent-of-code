function part1(datastreamBuffer: string, size = 4): number {
  for (let i = 0; i < datastreamBuffer.length - (size - 1); i += 1) {
    const slice = datastreamBuffer.slice(i, i + size);
    const set = new Set(slice);

    if (set.size === size) {
      return i + size;
    }
  }

  return -1;
}

function part2(datastreamBuffer: string): number {
  return part1(datastreamBuffer, 14);
}

export { part1, part2 };
