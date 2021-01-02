/* eslint-disable import/prefer-default-export */

function part1(input: number[]): number {
  const [cardPublicKey, doorPublicKey] = input;

  let encryptionKey = 1;
  let value = 1;

  while (value !== doorPublicKey) {
    value = (value * 7) % 20201227;
    encryptionKey = (encryptionKey * cardPublicKey) % 20201227;
  }

  return encryptionKey;
}

export { part1 };
