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
      expected: 5,
      roll: [1, 1, 1, 1, 1]
    },
    {
      expected: 2,
      roll: [1, 1, 2, 2, 2],
    },
    {
      expected: 1,
      roll: [1, 2, 3, 3, 5],
    },
  ];
describe.each(data)(`La somme de 1`, (d) => {
  it(`du lancer ${d.roll} devrait être ${d.expected}`, () => {
    const result = Game.calculate(1, d.roll)
    expect(result).toBe(d.expected);
  });
});

