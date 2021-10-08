var Game = require("./index.js");
new Game;

describe('getDiceResult', () => {
    it('CalculateOnes', () => {

      // const result = Game.calculate(1, [1,1,0,4,4]);
      const result = Game.calculate('ThreeOfAKind', [1,1,1,4,4]);
      console.log(result)
      expect(result).toBe(11);
    });
  });

