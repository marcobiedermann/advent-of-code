import { readFileSync } from 'fs';

const data = readFileSync(`${__dirname}/input`, 'utf-8');

// const r = Object.fromEntries(rules.split('\n').map((rule) => rule.split(': ')));

// r;

const [rules, msgs] = data.split('\n\n');
const map = Object.fromEntries(rules.split('\n').map((rule) => rule.split(': ')));

function expand(rule: string): string {
  if (rule[0] === '"') {
    return rule[1];
  }

  return `(${rule
    .split(' ')
    .reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue === '|' ? '|' : expand(map[currentValue])),
      '',
    )})`;
}

const rule = new RegExp(`^${expand(map[0])}$`, 'gm');
const matches = (msgs.match(rule) || []).length;

// // 182
console.log(`Messages lines (part 1): ${matches}`);

// let [rules, msgs] = data.split('\n\n');
// rules = rules.replace('8: 42', '8: 42 | 42 8');
// rules = rules.replace('11: 42 31', '11: 42 31 | 42 11 31');
// rules = Object.fromEntries(rules.split('\n').map(rule => rule.split(': ')));
// let n8 = 0;
// let n11 = 0;
// function expand(i, rule, n8, n11) {
//     if (i == 8 && n8 == 5) {
//         return '(' + expand(42, rules[42], n8, n11) + ')';
//     }
//     if (i == 11 && n11 == 5) {
//         return '(' + expand(42, rules[42], n8, n11) + expand(31, rules[31], n8, n11) + ')';
//     }
//     n8 += i == 8;
//     n11 += i == 11;
//     if (rule[0] == '"') {
//         return rule[1];
//     }
//     return '(' + rule.split(' ').reduce((rule, part) => rule + (part == '|' ? '|' : expand(part, rules[part], n8, n11)), '') + ')';
// }
// let rule = new RegExp('^' + expand(0, rules[0], 0, 0) + '$', 'gm');
// let matches = msgs.match(rule).length;

// // 334
// console.log('Messages lines (part 2): ' + matches);
