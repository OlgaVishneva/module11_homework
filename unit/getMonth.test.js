import { getMonth } from './getMonth.js'

describe('getMonth function', () => {
   it('should show name of the month', () => {
      expect(getMonth(3)).toBe('March'); // pass
      expect(getMonth(13)).toBe('Not a month'); // pass
      expect(getMonth(0)).toBe('March'); // fail
   });
})