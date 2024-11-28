const { expect } = require('chai');

describe('Testing numbers', () => {
  it('10 is equal to 10', () => {
    expect(10 === 10).to.be.true;
  });

  it('2 is equal to 2', () => {
    expect(2 === 2).to.be.true;
  });

  it.skip('2 is equal to 3', () => {
    expect(2 === 3).to.be.true;
  });

  it('3 is equal to 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('4 is equal to 4', () => {
    expect(4 === 4).to.be.true;
  });

  it('5 is equal to 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('6 is equal to 6', () => {
    expect(6 === 6).to.be.true;
  });

  it('8 is equal to 8', () => {
    expect(8 === 8).to.be.true;
  });
});
