var Game = require("./index.js");
new Game;

describe('getDiceResult', () => {
    it('retourne 1', () => {
      const result = Game.CalculateOnes([1,2,3,4,4]);
      expect(result).toBe(1);
    });
  });

