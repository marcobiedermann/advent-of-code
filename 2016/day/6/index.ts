function part1(messages: string[]): string {
  const { length } = messages[0];
  let errorCorrectMessage = '';

  for (let i = 0; i < length; i += 1) {
    const map = new Map<string, number>();
    let maxCharacter;
    let maxCount = Number.MIN_SAFE_INTEGER;

    for (let j = 0; j < messages.length; j += 1) {
      const message = messages[j];
      const character = message[i];

      map.set(character, (map.get(character) || 0) + 1);
    }

    map.forEach((value, key) => {
      if (value > maxCount) {
        maxCount = value;
        maxCharacter = key;
      }
    });

    errorCorrectMessage += maxCharacter;
  }

  return errorCorrectMessage;
}

function part2(messages: string[]): string {
  const { length } = messages[0];
  let errorCorrectMessage = '';

  for (let i = 0; i < length; i += 1) {
    const map = new Map<string, number>();
    let minCharacter;
    let minCount = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < messages.length; j += 1) {
      const message = messages[j];
      const character = message[i];

      map.set(character, (map.get(character) || 0) + 1);
    }

    map.forEach((value, key) => {
      if (value < minCount) {
        minCount = value;
        minCharacter = key;
      }
    });

    errorCorrectMessage += minCharacter;
  }

  return errorCorrectMessage;
}

export { part1, part2 };
