// const data = require('fs').readFileSync(`${__dirname}/input`, { encoding: 'utf-8' }).trim();

// const bits = [];
// for (const c of data) {
//   const v = parseInt(c, 16);
//   bits.push((v & 8) >> 3, (v & 4) >> 2, (v & 2) >> 1, (v & 1) >> 0);
// }

// function readBits(o, n) {
//   let res = 0;
//   for (let i = 0; i < n; i++) {
//     if (o.pos === o.bits.length) return false;
//     res = (res << 1) | o.bits[o.pos++];
//   }
//   return res;
// }

// function readPacket(o, cb) {
//   const version = readBits(o, 3);
//   const type = readBits(o, 3);
//   if (version === false || type === false) return false;

//   if (type === 4) {
//     while (true) {
//       const chunk = readBits(o, 5);
//       if ((chunk & 0x10) === 0) break;
//     }
//     cb(version);
//   } else {
//     const lt = readBits(o, 1);
//     if (lt === 0) {
//       cb(version);
//       const length = readBits(o, 15);
//       const sub = o.bits.slice(o.pos, o.pos + length);
//       const state = { bits: sub, pos: 0 };
//       while (readPacket(state, cb));
//       o.pos += length;
//     } else {
//       cb(version);
//       const packets = readBits(o, 11);
//       for (let i = 0; i < packets; i++) readPacket(o, cb);
//     }
//   }

//   return true;
// }

// const state = { bits, pos: 0 };
// let sum = 0;
// while (readPacket(state, (version) => (sum += version)));
// console.log(sum);

const data = require('fs').readFileSync(`${__dirname}/input`, { encoding: 'utf-8' }).trim();

const bits = [];
for (const c of data) {
  const v = parseInt(c, 16);
  bits.push((v & 8) >> 3, (v & 4) >> 2, (v & 2) >> 1, (v & 1) >> 0);
}

function readBits(o, n) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (o.pos === o.bits.length) return false;
    res = res * 2 + o.bits[o.pos++];
  }
  return res;
}

function readPacket(o, cb) {
  const version = readBits(o, 3);
  const type = readBits(o, 3);
  if (version === false || type === false) return false;

  if (type === 4) {
    let num = 0;
    while (true) {
      const chunk = readBits(o, 5);
      num = num * 16 + (chunk & 0xf);
      if ((chunk & 0x10) === 0) break;
    }
    cb(num);
  } else {
    const lt = readBits(o, 1);
    const subValues = [];

    if (lt === 0) {
      const length = readBits(o, 15);
      const sub = o.bits.slice(o.pos, o.pos + length);
      const state = { bits: sub, pos: 0 };
      while (readPacket(state, (num) => subValues.push(num)));
      o.pos += length;
    } else {
      const packets = readBits(o, 11);
      for (let i = 0; i < packets; i++) readPacket(o, (num) => subValues.push(num));
    }

    if (type === 0) {
      cb(subValues.reduce((a, v) => a + v, 0));
    } else if (type === 1) {
      cb(subValues.reduce((a, v) => a * v, 1));
    } else if (type === 2) {
      cb(Math.min(...subValues));
    } else if (type === 3) {
      cb(Math.max(...subValues));
    } else if (type === 5) {
      cb(subValues[0] > subValues[1] ? 1 : 0);
    } else if (type === 6) {
      cb(subValues[0] < subValues[1] ? 1 : 0);
    } else if (type === 7) {
      cb(subValues[0] === subValues[1] ? 1 : 0);
    }
  }

  return true;
}

const state = { bits, pos: 0 };
while (readPacket(state, (num) => console.log(num)));
