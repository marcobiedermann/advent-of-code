interface Column {
  value: number;
  marked: boolean;
}

const input: Column[][] = [
  [
    {
      value: 3,
      marked: false,
    },
    {
      value: 2,
      marked: false,
    },
    {
      value: 3,
      marked: false,
    },
  ],
  [
    {
      value: 3,
      marked: false,
    },
    {
      value: 3,
      marked: false,
    },
    {
      value: 3,
      marked: false,
    },
  ],
  [
    {
      value: 3,
      marked: false,
    },
    {
      value: 1,
      marked: false,
    },
    {
      value: 2,
      marked: false,
    },
  ],
];

const order = 3;

checkRows(input); // ?
