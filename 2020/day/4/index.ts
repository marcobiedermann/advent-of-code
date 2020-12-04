interface Passport {
  byr?: string;
  cid?: string;
  ecl?: string;
  eyr?: string;
  hcl?: string;
  hgt?: string;
  iyr?: string;
  pid?: string;
}

const requiredFields = ['byr', 'ecl', 'eyr', 'hcl', 'hgt', 'iyr', 'pid'];

function inRange(number: number, start: number, end: number): boolean {
  return number >= start && number <= end;
}

function isBirthday(birthday: string): boolean {
  const parsedBirthday = parseInt(birthday, 10);

  return inRange(parsedBirthday, 1920, 2002);
}

function isCountryId(): boolean {
  return true;
}

function isEyeColor(eyeColor: string): boolean {
  return /^(amb|blu|brn|grn|gry|hzl|oth)$/.test(eyeColor);
}

function isExpirationYear(expirationYear: string): boolean {
  const parsedExpirationYear = parseInt(expirationYear, 10);

  return inRange(parsedExpirationYear, 2020, 2030);
}

function isHairColor(hairColor: string): boolean {
  return /^#[0-9a-f]{6}$/.test(hairColor);
}

function isHeight(height: string): boolean {
  const { groups } = height.match(/^(?<value>\d+)(?<unit>(cm|in))?$/) || [];

  if (!groups) {
    throw new Error('Invalid input');
  }

  const { value, unit } = groups;
  const parsedValue = parseInt(value, 10);

  if (unit === 'cm') {
    return inRange(parsedValue, 150, 193);
  }

  if (unit === 'in') {
    return inRange(parsedValue, 59, 76);
  }

  return false;
}

function isIssueYear(issueYear: string): boolean {
  const parsedIssueYear = parseInt(issueYear, 10);

  return inRange(parsedIssueYear, 2010, 2020);
}

function isPassportId(passportId: string): boolean {
  return /^\d{9}$/.test(passportId);
}

interface Validation {
  [key: string]: (input: string) => boolean;
}

const validation: Validation = {
  byr: isBirthday,
  cid: isCountryId,
  ecl: isEyeColor,
  eyr: isExpirationYear,
  hcl: isHairColor,
  hgt: isHeight,
  iyr: isIssueYear,
  pid: isPassportId,
};

function parsePassport(passport: string): Passport {
  return Object.fromEntries(passport.split(/\s/).map((field) => field.split(':')));
}

function parsePassports(passports: string[]): Passport[] {
  return passports.map(parsePassport);
}

function isValidPassport(passport: Passport): boolean {
  return Object.entries(passport).every(([key, value]) => validation[key](value));
}

function isPassport(passport: Passport): boolean {
  const keys = Object.keys(passport);

  return requiredFields.every((requiredField) => keys.find((key) => key === requiredField));
}

function isStrictlyPassport(passport: Passport): boolean {
  return isPassport(passport) && isValidPassport(passport);
}

function part1(passports: string[]): number {
  return parsePassports(passports).filter(isPassport).length;
}

function part2(passports: string[]): number {
  return parsePassports(passports).filter(isStrictlyPassport).length;
}

export { part1, part2 };
