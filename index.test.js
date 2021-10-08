var Game = require("./index.js");
new Game;

describe('getDiceResult', () => {
    it('CalculateOnes', () => {

      const result = Game.calculate(1, [1,1,0,4,4]);
      expect(result).toBe(3);
    });
  });

