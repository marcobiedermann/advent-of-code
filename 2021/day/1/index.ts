function part1(depths: number[]): number {
  const windowSize = 2;

  return depths.slice(0, -(windowSize - 1)).reduce((accumulator, currentValue, currentIndex) => {
    const nextValue = depths[currentIndex + 1];

    if (nextValue > currentValue) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);
}

function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => add(accumulator, currentValue), 0);
}

function part2(depths: number[]): number {
  const windowSize = 3;

  return depths.slice(0, -(windowSize - 1)).reduce((accumulator, _currentValue, currentIndex) => {
    const nextIndex = currentIndex + 1;

    const a = sum(depths.slice(currentIndex, currentIndex + windowSize));
    const b = sum(depths.slice(nextIndex, nextIndex + windowSize));

    if (b > a) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);
}

export { part1, part2 };
