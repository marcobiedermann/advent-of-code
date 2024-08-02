import { readFile } from 'node:fs';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n');

function parseExpression(expression: string): string {
  const { groups } = expression.match(/\((?<sub>[^()]+)\)/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { sub } = groups;

  return sub;
}

function evaluate(line: string) {
  const parsedExpression = parseExpression(line);

  const tokens = [];

  parsedExpression.split(' ');
}

//                                26
evaluate('2 * 3 + (4 * 5)'); // ?

//                                            437
// evaluate('5 + (8 * 3 + 9 + 3 * 4 * 3)') // ?

function part1(lines: string[]): number {
  return lines.reduce((accumulator, currentValue) => accumulator + evaluate(currentValue), 0);
}

// part1(input); // ?

// function foo (input, part) {
// 	function solve(math) {
// 		if (part === 2) {
// 			if (math.includes("*") !== math.includes("+")) {
// 				return eval(math);
// 			}
// 		}

// 		// Find and solve parentheses first
// 		while (math.indexOf("(") !== -1) {
// 			const absoluteStartIndex = math.indexOf("(");
// 			const substr = math.substr(absoluteStartIndex + 1);
// 			let counter = 0;
// 			let len;
// 			for (len=0; len<substr.length; len++) {
// 				if (substr[len] == "(") counter++;
// 				else if (substr[len] == ")") counter--;
// 				if (counter < 0) break;
// 			}
// 			const evaluated = solve(substr.substr(0, len));
// 			math = math.substr(0, absoluteStartIndex)
// 				+ evaluated.toString()
// 				+ math.substr(absoluteStartIndex+len+2);
// 		}

// 		// Solve
// 		let answer = 0;
// 		if (part === 1) {
// 			math.match(/(?:([*+])\ )?([0-9]+)/g).forEach((match)=>{
// 				match = match.match(/(?:([*+])\ )?([0-9]+)/);
// 				match[1] = match[1] ?? "+";
// 				match[2] = parseInt(match[2]);
// 				switch (match[1]) {
// 					case "+": answer += match[2]; break;
// 					case "*": answer *= match[2]; break;
// 				}
// 			});
// 		}
// 		else if (part === 2) {
// 			// It's gotta work if you replace enough... right?
// 			math = math.replace(/([0-9]+) \+ ([0-9]+)/g, "($&)");
// 			answer = solve(math);
// 		}

// 		//console.log(math, "=", answer);

// 		return answer;
// 	}

// 	const operations = input.split("\n");
// 	let sum = 0;
// 	operations.forEach((operation)=>{
// 		sum += solve(operation);
// 	});

// 	return sum;
// };

// // 15285807527593
// // 461295257566346
// foo(input, 2) //?
