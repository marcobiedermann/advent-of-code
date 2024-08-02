import { readFile } from 'node:fs';

const input = (await readFile(`${__dirname}/input`, 'utf-8')).split('\n\n');

function calculateScore(scores: number[]): number {
  const { length } = scores;

  return scores.reduce(
    (accumulator, currentValue, index) => accumulator + currentValue * (length - index),
    0,
  );
}

function round(players: number[][]): number[][] {
  const [player1, player2] = players;
  const [player1Top, ...player1Rest] = player1;
  const [player2Top, ...player2Rest] = player2;

  if (player1Top > player2Top) {
    return [[...player1Rest, player1Top, player2Top], player2Rest];
  }

  return [player1Rest, [...player2Rest, player2Top, player1Top]];
}

function play(players: number[][]): number {
  const [player1, player2] = players;

  if (!player1.length) {
    return calculateScore(player2);
  }

  if (!player2.length) {
    return calculateScore(player1);
  }

  return play(round(players));
}

function parsePlayer(player: string) {
  return player.split('\n').slice(1).map(Number);
}

function parsePlayers(players: string[]) {
  return players.map(parsePlayer);
}

function part1(players: string[]) {
  return play(parsePlayers(players));
}

//                  32179
part1(input);

// const round = ([[x, ...xs], [y, ...ys]]) =>
//   (x <= xs.length && y <= ys.length ? play([xs.slice(0, x), ys.slice(0, y)]).winner == 0 : x > y)
//     ? [[...xs, x, y], ys]
//     : [xs, [...ys, y, x]];
// const score = ([x, ...xs]) => x * (xs.length + 1) + (xs.length == 0 ? 0 : score(xs));
// const play = ([x, y], prev = new Set()) =>
//   ((s) =>
//     prev.has(s) || y.length == 0
//       ? { winner: 0, score: score(x) }
//       : x.length == 0
//       ? { winner: 1, score: score(y) }
//       : play(round([x, y]), prev.add(s)))([x, y].map((x) => x.join('\n')).join('\n\n'));
// play(
//   input
//     .trim()
//     .split('\n\n')
//     .map((x) => x.split('\n').slice(1).map(Number)),
// ).score;

// function foo(data) {
//   let players = data.split('\n\n').map(player => player.split(':\n')[1]).map(player => player.split('\n').map(card => +card));
//   function play(players) {
//       let previous = new Set();
//       while (players[0].length > 0 && players[1].length > 0) {
//           if (previous.has(players[0] + ' ' + players[1])) {
//               return 0;
//           }
//           previous.add(players[0] + ' ' + players[1]);
//           let topA = players[0].shift();
//           let topB = players[1].shift();
//           let winner = topA > topB ? 0 : 1;
//           if (players[0].length >= topA && players[1].length >= topB) {
//               winner = play([players[0].slice(0, topA), players[1].slice(0, topB)]);
//           }
//           if (winner == 0) {
//               players[0].push(topA, topB);
//           }
//           else {
//               players[1].push(topB, topA);
//           }
//       }
//       return players[0].length ? 0 : 1;
//   }
//   let winner = play(players, 1);
//   let score = players[winner].reverse().reduce((score, card, i) => score += card * (i + 1), 0);
//   console.log('Winning score (part 2): ' + score);
// }

// 30498
// foo(input)
