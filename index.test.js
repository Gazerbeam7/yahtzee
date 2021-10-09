var Game = require("./index.js");
new Game;

  const dataCalculate = [
    {
      calculated: 1,
      expected: 5,
      roll: [1, 1, 1, 1, 1]
    },
    {
      calculated: 1,
      expected: 2,
      roll: [1, 1, 2, 2, 2],
    },
    {
      calculated: 1,
      expected: 1,
      roll: [1, 2, 3, 3, 5],
    },
    {
      calculated: 2,
      expected: 10,
      roll: [2, 2, 2, 2, 2]
    },
    {
      calculated: 2,
      expected: 6,
      roll: [1, 1, 2, 2, 2],
    },
    {
      calculated: 2,
      expected: 2,
      roll: [1, 2, 3, 3, 5],
    },
    {
      calculated: 3,
      expected: 3,
      roll: [3, 1, 1, 1, 1]
    },
    {
      calculated: 3,
      expected: 15,
      roll: [3, 3, 3, 3, 3],
    },
    {
      calculated: 3,
      expected: 6,
      roll: [1, 2, 3, 3, 5],
    },
    {
      calculated: 4,
      expected: 20,
      roll: [4, 4, 4, 4, 4]
    },
    {
      calculated: 4,
      expected: 8,
      roll: [4, 1, 4, 2, 2],
    },
    {
      calculated: 4,
      expected: 12,
      roll: [1, 2, 4, 4, 4],
    },
    {
      calculated: 5,
      expected: 25,
      roll: [5, 5, 5, 5, 5]
    },
    {
      calculated: 5,
      expected: 15,
      roll: [5, 5, 5, 2, 2],
    },
    {
      calculated: 5,
      expected: 5,
      roll: [5, 2, 4, 4, 4],
    },
    {
      calculated: 6,
      expected: 30,
      roll: [6, 6, 6, 6, 6]
    },
    {
      calculated: 6,
      expected: 18,
      roll: [6, 6, 6, 2, 2],
    },
    {
      calculated: 6,
      expected: 12,
      roll: [6, 6, 4, 4, 4],
    },
    {
      calculated: 'ThreeOfAKind',
      expected: 14,
      roll: [2, 2, 2, 3, 5],
    },
    {
      calculated: 'ThreeOfAKind',
      expected: 19,
      roll: [5, 5, 2, 5, 2]
    },
    {
      calculated: 'ThreeOfAKind',
      expected: 20,
      roll: [4, 4, 4, 4, 4],
    },
    {
      calculated: 'FourOfAKind',
      expected: 14,
      roll: [3, 2, 3, 3, 3],
    },
    {
      calculated: 'FourOfAKind',
      expected: 7,
      roll: [3, 1, 1, 1, 1]
    },
    {
      calculated: 'FourOfAKind',
      expected: 15,
      roll: [3, 3, 3, 3, 3],
    },
  ];
describe.each(dataCalculate)(`La somme`, (d) => {
  it(`de ${d.calculated} du lancer ${d.roll} devrait être ${d.expected}`, () => {
    const result = Game.calculate(d.calculated, d.roll)
    expect(result).toBe(d.expected);
  });
});

dataSpecial = [
  {
    calculated: 'SmallStraight',
    expected: 30,
    roll: [1, 2, 3, 4, 1]
  },
  {
    calculated: 'SmallStraight',
    expected: 30,
    roll: [2, 3, 4, 5, 6]
  },
  {
    calculated: 'SmallStraight',
    expected: 30,
    roll: [2, 4, 3, 1, 5]
  },
  {
    calculated: 'HighStraight',
    expected: 40,
    roll: [6, 5, 3, 4, 2]
  },
  {
    calculated: 'HighStraight',
    expected: 40,
    roll: [1, 2, 3, 4, 5]
  },
  {
    calculated: 'FiveOfAKind',
    expected: 50,
    roll: [2, 2, 2, 2, 2],
  },
  {
    calculated: 'FiveOfAKind',
    expected: 50,
    roll: [1, 1, 1, 1, 1]
  },
  {
    calculated: 'FiveOfAKind',
    expected: 50,
    roll: [4, 4, 4, 4, 4],
  },
  {
    calculated: 'FullHouse',
    expected: 30,
    roll: [4, 4, 4, 1, 1],
  },
  {
    calculated: 'FullHouse',
    expected: 30,
    roll: [4, 3, 4, 3, 4],
  },
  {
    calculated: 'Luck',
    expected: 14,
    roll: [4, 4, 4, 1, 1],
  },
  {
    calculated: 'Luck',
    expected: 10,
    roll: [2, 1, 1, 3, 3],
  },
];
describe.each(dataSpecial)(`Le resultat`, (d) => {
  it(`de ${d.calculated} du lancer ${d.roll} devrait être ${d.expected}`, () => {
    const result = Game.calculate(d.calculated, d.roll)
    expect(result).toBe(d.expected);
  });
});

