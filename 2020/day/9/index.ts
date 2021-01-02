function twoSum(nums: number[], target: number): boolean {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];
    const diff = target - current;

    if (map.has(diff)) {
      return true;
    }

    map.set(current, i);
  }

  return false;
}

function part1(input: number[], preambleSize = 25): number | undefined {
  for (let i = preambleSize; i < input.length; i += 1) {
    const preamble = input.slice(i - preambleSize, i);
    const current = input[i];

    if (!twoSum(preamble, current)) {
      return current;
    }
  }

  return undefined;
}

function part2(input: number[], target: number): number {
  let l = 0;
  let r = 1;
  let s = input[l];

  while (true) {
    if (s === target) {
      const preamble = input.slice(l, r);
      const min = Math.min(...preamble);
      const max = Math.max(...preamble);
      const sum = min + max;

      return sum;
    }

    if (s < target) {
      s += input[r];
      r += 1;
    }

    if (s > target) {
      s -= input[l];
      l += 1;
    }
  }
}

export { part1, part2 };
