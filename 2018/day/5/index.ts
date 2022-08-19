/* eslint-disable import/prefer-default-export */

function peek<T>(stack: T[]): T {
  return stack[stack.length - 1];
}

function part1(polymer: string): number {
  const stack: string[] = [];

  for (let i = 0; i < polymer.length; i += 1) {
    const character = polymer[i];
    const peeked = peek(stack);

    if (
      !stack.length ||
      peeked === character ||
      (peeked.toLocaleLowerCase() !== character && peeked.toUpperCase() !== character)
    ) {
      stack.push(character);
    } else {
      stack.pop();
    }
  }

  return stack.length;
}

export { part1 };
