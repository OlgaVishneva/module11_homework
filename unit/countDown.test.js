import { countDown } from './countDown.js'

describe('countDown function', () => {
   it('countdown numbers not equal 0', () => {
      expect(countDown(3)).toBe('321'); 
   }),
   it('countdown numbers not equal 0', () => {
      expect(countDown(4)).toBe('4321'); 
 }),
    it('сountdown numbers equal 0', () => {
      expect(countDown(0)).toBe("0"); 
      });
})