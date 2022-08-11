import { readFileSync } from 'fs';

const input = readFileSync(`${__dirname}/input`, 'utf-8').split('\n');
const sample = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n');

const scores = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
};

const mapping = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>',

  ')': '(',
  ']': '[',
  '}': '{',
  '>': '<',
};

function part1(lines: string[]) {}

function part2(lines: string[]) {}

part1(sample); // ?

export { part1, part2 };

// const SCORE_TABLE={
//   ')': 3,
//   ']': 57,
//   '}': 1197,
//   '>': 25137,
//   "<": 4,
//   "[": 2,
//   "{": 3,
//   "(": 1,
// }
// const CLOSE_MAPPING = {
//   ">": "<",
//   "]": "[",
//   "}": "{",
//   ")": "(",
// };
// const OP_MAPPING = {
//   "<": ">",
//   "[": "]",
//   "{": "}",
//   "(": ")",
// };
// const CLOSE_CHARS = [">","]","}",")"];

// const OPEN_CHARS=["<","[","{","(",]

// let P1score=0;
// let P2scores=[];
// for(let line of input){
//   let opStack=[]
//   let score=0;
//   for(let char of line){
//       if(OPEN_CHARS.includes(char))opStack.push(char)
//       else if(CLOSE_CHARS.includes(char))
//           if(opStack[opStack.length-1]===CLOSE_MAPPING[char])opStack.pop()
//           else{score=SCORE_TABLE[char];break;}
//   }
//   if(score===0){
//       let finish=""
//       let lineScore=0;
//       for(let i=opStack.length-1;i>=0;i--){
//           finish+=OP_MAPPING[opStack[i]];
//           lineScore=lineScore*5+SCORE_TABLE[opStack[i]]
//       }
//       P2scores.push(lineScore)
//   }
//   else P1score+=score;
// }
// P2scores.sort((x,y)=>x-y)

// console.log("p1:", P1score)
// console.log("p2:", P2scores[Math.floor(P2scores.length/2)])
