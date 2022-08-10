interface Room {
  encryptedName: string;
  sectorId: number;
  checksum: string;
}

function parseRoom(room: string): Room {
  const { groups } =
    room.match(/^(?<encryptedName>[a-z-]+)-(?<sectorId>[\d]+)\[(?<checksum>[a-z]+)\]$/) || [];

  if (!groups) {
    throw new Error('Room does not match pattern');
  }

  const { encryptedName, sectorId, checksum } = groups;

  return {
    encryptedName,
    sectorId: parseInt(sectorId, 10),
    checksum,
  };
}

function parseRooms(rooms: string[]): Room[] {
  return rooms.map(parseRoom);
}

function countOccurrences(characters: string): Map<string, number> {
  const map = new Map<string, number>();

  characters.split('').forEach((character) => {
    map.set(character, (map.get(character) || 0) + 1);
  });

  return map;
}

function isRealRoom(room: Room): boolean {
  const { encryptedName, checksum } = room;
  const occurrences = countOccurrences(encryptedName.replaceAll('-', ''));
  const sortedOccurrences = [...occurrences.entries()]
    .sort(([aKey, aValue], [bKey, bValue]) => {
      if (aValue === bValue) {
        return aKey.localeCompare(bKey);
      }

      return bValue - aValue;
    })
    .slice(0, 5)
    .map(([key]) => key)
    .join('');

  return sortedOccurrences === checksum;
}

function getSectorId(room: Room): number {
  return room.sectorId;
}

function sum(arr: number[]): number {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function part1(rooms: string[]): number {
  return sum(parseRooms(rooms).filter(isRealRoom).map(getSectorId));
}

function rotate(character: string, n: number): string {
  const start = 'a'.charCodeAt(0);

  return String.fromCharCode(((character.charCodeAt(0) - start + n) % 26) + start);
}

function caesarShift(str: string, n: number): string {
  return str
    .split('')
    .map((character) => rotate(character, n))
    .join('');
}

function getRealName(encryptedName: string, sectorId: number): string {
  return encryptedName
    .split('-')
    .map((word) => caesarShift(word, sectorId))
    .join(' ');
}

function part2(rooms: string[]): number | undefined {
  return parseRooms(rooms)
    .map((room) => {
      const { encryptedName, sectorId } = room;

      const realName = getRealName(encryptedName, sectorId);

      return {
        ...room,
        realName,
      };
    })
    .find((room) => room.realName === 'northpole object storage')?.sectorId;
}

export { part1, part2 };
