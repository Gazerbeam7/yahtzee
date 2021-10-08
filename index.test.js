function getDiceResult = [1,2,3,4,5,6];

describe('getDiceResult', () => {
    it('retourne 1', () => {
      const result = getDiceResult(1,2,3,4,5,6);
  
      expect(result).toBe('1');
    });
    it('retourne 2', () => {
        const result = getDiceResult(1,2,3,4,5,6);
  
      expect(result).toBe('2');
    });
    it('retourne 3', () => {
        const result = getDiceResult(1,2,3,4,5,6);
  
      expect(result).toBe('3');
    });
    it('retourne 4', () => {
        const result = getDiceResult(1,2,3,4,5,6);
  
      expect(result).toBe('4');
    });
    it('retourne 5', () => {
        const result = getDiceResult(1,2,3,4,5,6);
  
      expect(result).toBe('5');
    });
    it('retourne 6', () => {
        const result = getDiceResult(1,2,3,4,5,6);
  
      expect(result).toBe('6');
    });
  });