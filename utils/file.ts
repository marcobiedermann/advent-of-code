import { readFile } from 'node:fs/promises';
import { ENCODING } from './string.ts';

function getInput(directory: string, filename = 'input'): Promise<string> {
  return readFile(`${directory}/${filename}`, ENCODING);
}

function getInputSample(directory: string, filename = 'input'): Promise<string> {
  return getInput(directory, `${filename}.sample`);
}

export { getInput, getInputSample };
