import { expect } from 'chai';

import { Common } from '../src/Common';

describe(`${__dirname}/Common.ts (class)`, () => {
  it('Should properly check if strings are empty.', () => {
    expect(Common.isStringEmpty('This string is NOT empty!'), 'Common.isStringEmpty() is reporting that a valid string is empty. What is wrong?')
      .to.equal(false);
    
    expect(Common.isStringEmpty(''), 'Common.isStringEmpty() is reporting an empty string to be NOT empty. What is wrong?')
      .to.equal(true);
    
    // Turn off ESLint on next line because we are TRYING to break Common.isStringEmpty().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(Common.isStringEmpty(null as any), 'Common.isStringEmpty() is reporting a null value to be empty. It should not be empty because it is null. What is wrong?')
      .to.equal(false);
  });
});
