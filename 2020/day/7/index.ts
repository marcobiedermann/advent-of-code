// https://github.com/adriennetacke/advent-of-code-2020

import { readFileSync } from 'fs';
import { part2 } from '../../../2015/day/1';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');

function parseBag(bag: string): string {
  const { groups } = bag.match(/(?<amount>\d+) (?<color>.*) bags?/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { color } = groups;

  return color;
}

function parseBags(bags: string[]): string[] {
  return bags.map(parseBag);
}

function parseRule(rule: string): [string, Set<string>] {
  const { groups } = rule.match(/(?<input>.*) bags contain (?<output>.*)\./) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { input, output } = groups;
  const bags = output !== 'no other bags' ? parseBags(output.split(', ')) : [];
  const set = new Set(bags);

  return [input, set];
}

function part1(rules: string[]): number {
  const bags = new Map<string, Set<string>>(rules.map(parseRule));

  function expand(bag: string): string[] {
    const colors: string[] = [...bags.get(bag)?.values()];

    for (const color of bags.get(bag).values()) {
      colors.push(...expand(color));
    }

    return colors;
  }

  return [...bags.keys()].filter((key) => expand(key).includes('shiny gold')).length;
}

//                  128
part1(input); // ?

// const part1 = (input) => {
// .  rules = new Map()

//   const expand = (bag) => {
//     const colors = [...rules[bag].values()];

//     for (const color of rules[bag].values()) {
//       colors.push(...expand(color));
//     }

//     return colors;
//   };

//   return Object
//     .keys(rules)
//     .filter((key) => expand(key).includes('shiny gold'))
//     .length;
// };

// const part2 = (input) => {
//   const rules = input.reduce((rules, line) => {
//     const [, color, otherColors] = /(\w+ \w+) bags contain (.*)\./.exec(line);

//     const compatibleWith = otherColors !== 'no other bags'
//       ? otherColors.split(', ').map((other) => {
//         const [, units, color] = /(\d+) (\w+ \w+) bags?/.exec(other);

//         return { units: parseInt(units), color };
//       })
//       : [];

//     rules.set(color, []);

//     compatibleWith.forEach((otherColor) => rules.get(color).push(otherColor));

//     return rules;
//   }, new Map());

//   const traverse = (bag) => {
//     let total = 0;

//     for (const { color, units } of rules.get(bag)) {
//       total += units + units * traverse(color);
//     }

//     return total;
//   };

//   return traverse('shiny gold');
// };

export { part1, part2 };
