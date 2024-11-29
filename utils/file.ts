import { readFile } from 'node:fs/promises';
import { ENCODING } from './string.ts';

function getInput(directory: string): Promise<string> {
  return readFile(`${directory}/input`, ENCODING);
}

export { getInput };
