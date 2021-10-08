var Game = require("./index.js");
new Game;

// describe('getDiceResult', () => {
//     it('CalculateOnes', () => {
//
//       // const result = Game.calculate(1, [1,1,0,4,4]);
//       const result = Game.calculate('ThreeOfAKind', [1,1,1,4,4]);
//       console.log(result)
//       expect(result).toBe(11);
//     });
//   });

  const data = [
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
  ];
describe.each(data)(`La somme`, (d) => {
  it(`de ${d.calculated} du lancer ${d.roll} devrait être ${d.expected}`, () => {
    const result = Game.calculate(${d.calculated}, d.roll)
    expect(result).toBe(d.expected);
  });
});

