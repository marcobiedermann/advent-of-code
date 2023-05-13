import { readFileSync } from 'node:fs';

const input = readFileSync(`${__dirname}/input.sample`, 'utf-8').split('\n\n');

const monkeys = {
  0: {
    items: [79, 98]
  },
  1: {
    items: [54, 65, 75, 74]
  }
}

function parseNote(note: string) {
  const lines = note.split('\n')
  const [monkey, starting, operation, test, t, f] = lines

}

function parseNotes(notes: string[]) {
  return notes.slice(0, 1).map(parseNote)
}

function part1(notes: string[]) {
  const parsedNotes = parseNotes(notes)
}

part1(input)