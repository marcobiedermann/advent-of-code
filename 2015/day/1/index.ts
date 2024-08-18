type Parenthesis = '(' | ')';
const OPEN_PARENTHESIS = '(' as const;
type OpenParenthesis = typeof OPEN_PARENTHESIS;

function isOpenParenthesis(parenthesis: string): parenthesis is OpenParenthesis {
  return parenthesis === OPEN_PARENTHESIS;
}

function part1(input: string): number {
  let floor = 0;

  for (let i = 0; i < input.length; i += 1) {
    const parenthesis = input[i] as Parenthesis;

    if (isOpenParenthesis(parenthesis)) {
      floor += 1;
    } else {
      floor -= 1;
    }
  }

  return floor;
}

function part2(input: string): number {
  let floor = 0;

  for (let i = 0; i < input.length; i += 1) {
    const parenthesis = input[i] as Parenthesis;

    if (isOpenParenthesis(parenthesis)) {
      floor += 1;
    } else {
      floor -= 1;
    }

    if (floor === -1) {
      return i + 1;
    }
  }

  return -1;
}

export { part1, part2 };
