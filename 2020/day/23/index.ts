// const input = '326519478';
const input = '389125467';

function part1(labeling: string) {
  const cups = labeling.split('').map(Number);

  // for (let i = 0; i < 100; i += 1) {
  const [currentCup, ...rest] = cups;
  const pickUp = rest.slice(0, 3);
  const remaining = rest.slice(3);
  const destination;

  currentCup;
  pickUp;
  // }
}

part1(input);

// const data = '326519478';
// let cups = [...data].map(Number);

// for (let i = 0; i < 100; i++) {
//   const extract = cups.slice(1, 4);
//   const remaining = [cups[0]].concat(cups.slice(4));

//   let cur = cups[0] - 1;
//   while (true) {
//     if (cur === 0) cur += cups.length;

//     const pos = remaining.indexOf(cur);
//     if (pos !== -1) {
//       cups = remaining
//         .slice(0, pos + 1)
//         .concat(extract)
//         .concat(remaining.slice(pos + 1));
//       break;
//     }

//     cur--;
//   }

//   cups.push(cups.shift());
// }

// let res = cups.concat(cups);
// res = res.slice(res.indexOf(1) + 1, res.indexOf(1) + cups.length);
// // 25368479
// console.log(res.join(""));

// const data = '326519478';
// const cups = [...data].map(Number);
// const steps = 10000000;

// for (let i = Math.max(...cups) + 1; i <= 1000000; i++) {
//   cups.push(i);
// }
// cups.forEach((v, i) => (cups[i] = { v }));
// cups.forEach((v, i) => (cups[i].n = i < cups.length - 1 ? cups[i + 1] : cups[0]));

// const vMap = new Map(cups.map((item) => [item.v, item]));

// let head = cups[0];

// for (let i = 0; i < steps; i++) {
//   if (i % 1000 === 0) {
//     process.stdout.write(`  ${(i / (steps / 100)).toFixed(2)}%\r`);
//   }

//   const extract = [head.n.v, head.n.n.v, head.n.n.n.v];
//   const extractHead = head.n;
//   head.n = head.n.n.n.n;

//   let cur = head.v - 1;
//   while (true) {
//     while (extract.includes(cur)) cur--;
//     if (cur === 0) cur += cups.length;
//     while (extract.includes(cur)) cur--;

//     const pos = vMap.get(cur);
//     if (pos) {
//       extractHead.n.n.n = pos.n;
//       pos.n = extractHead;
//       break;
//     }

//     cur--;
//   }

//   head = head.n;
// }

// const posOne = vMap.get(1);

// // 44541319250
// console.log(`\n${posOne.n.v * posOne.n.n.v}`);
