// const test = false;
// let p1 = test ? 4 : 5;
// let p2 = test ? 8 : 6;

// let counter = 1;
// let s1 = 0;
// let s2 = 0;

// let rolls = 0;
// while (true) {
//   rolls += 3;
//   const add1 = counter <= 98 ? counter * 3 + 3 : counter === 99 ? 200 : 103;
//   p1 += add1;
//   counter += 3;
//   counter = ((counter - 1) % 100) + 1;
//   p1 = ((p1 - 1) % 10) + 1;
//   s1 += p1;
//   if (s1 >= 1000) break;

//   rolls += 3;
//   const add2 = counter <= 98 ? counter * 3 + 3 : counter === 99 ? 200 : 103;
//   p2 += add2;
//   counter += 3;
//   counter = ((counter - 1) % 100) + 1;
//   p2 = ((p2 - 1) % 10) + 1;
//   s2 += p2;
//   if (s2 >= 1000) break;
// }

// // console.log({ rolls, s1, s2 });
// console.log(rolls * Math.min(s1, s2));

const test = false;
const player1 = test ? 4 : 5;
const player2 = test ? 8 : 6;

const combinations = [
  [1, 1, 1],
  [1, 1, 2],
  [1, 1, 3],
  [1, 2, 1],
  [1, 2, 2],
  [1, 2, 3],
  [1, 3, 1],
  [1, 3, 2],
  [1, 3, 3],
  [2, 1, 1],
  [2, 1, 2],
  [2, 1, 3],
  [2, 2, 1],
  [2, 2, 2],
  [2, 2, 3],
  [2, 3, 1],
  [2, 3, 2],
  [2, 3, 3],
  [3, 1, 1],
  [3, 1, 2],
  [3, 1, 3],
  [3, 2, 1],
  [3, 2, 2],
  [3, 2, 3],
  [3, 3, 1],
  [3, 3, 2],
  [3, 3, 3],
];

const combinationCounts = new Map();
for (const c of combinations) {
  const sum = c[0] + c[1] + c[2];
  combinationCounts.set(sum, (combinationCounts.get(sum) ?? 0) + 1);
}

const wins = new Map();

function count(p1, p2, s1, s2) {
  // always p1's turn, p2 just made theirs
  if (s2 >= 21) return [0, 1];

  const key = [p1, p2, s1, s2].join(',');
  const cached = wins.get(key); // very slow without cache
  if (cached != null) return cached;

  const res = [0, 0];

  for (const [sum, cnt] of combinationCounts.entries()) {
    let n1 = p1 + sum;
    n1 = ((n1 - 1) % 10) + 1;
    const ns1 = s1 + n1;
    const w = count(p2, n1, s2, ns1);
    res[0] += w[1] * cnt;
    res[1] += w[0] * cnt;
  }

  wins.set(key, res); // memoize result
  return res;
}

const cnt = count(player1, player2, 0, 0);
// console.log(wins.size);
// console.log(cnt);
console.log(Math.max(...cnt));
