import { readFile } from 'node:fs/promises';
import { ENCODING } from './string';

function getInput(directory: string): Promise<string> {
  return readFile(`${directory}/input`, ENCODING);
}

export { getInput };
