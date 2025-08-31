import {formatCurrency} from '../../scripts/utils/money.js';

// parameters: suite title, and test function
describe('test sute: formatCurrency', () => {
  //parameter: string test name  
  it('converts cents into dollars', () => {
    //expect compares value to another value
    expect(formatCurrency(2095)).toEqual('20.95')
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
  
  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});