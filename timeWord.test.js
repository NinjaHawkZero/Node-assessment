const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test('am output', () => {  
    expect(timeWord('01:43')).toBe('one forty three am')
  });
  

  test('pm output', () => { 
    expect(timeWord('15:43')).toBe('three forty three pm')
  });

  test('midnight output', () => { 
    expect(timeWord('00:00')).toBe('midnight')
  });


  test('o clock', () => { 
    expect(timeWord('11:00')).toBe('eleven O Clock am')
  });
});