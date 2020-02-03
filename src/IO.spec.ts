import { expect } from 'chai';

import { IO } from './IO';

interface ITestWriteData {
  firstName: string;
  lastName: string;
  age: number;
}

const baseData: ITestWriteData = {
  firstName: 'Kyle',
  lastName:  'Stankovich',
  age:       19
};

const testFile = 'data.test.json';

describe(`${__dirname}/IO.ts (class)`, () => {
  it('Should properly write data to disk.', () => {
    const data: ITestWriteData = baseData;

    expect(IO.writeFile(testFile, data), 'IO.writeFile() is not properly writing data to the disk.')
      .to.equal(true);
  });

  it('Should properly read data from disk.', () => {
    const data: ITestWriteData = JSON.parse(IO.readFile(testFile));

    expect(data.firstName, 'IO.readFile() did not read [firstName] from the test data. Something went wrong.')
      .to.equal(baseData.firstName);

    expect(data.lastName, 'IO.readFile() did not read [lastName] from the test data. Something went wrong.')
      .to.equal(baseData.lastName);

    expect(data.age, 'IO.readFile() did not read [age] from the test data. Something went wrong.')
      .to.equal(baseData.age);
  });

  it('Should properly delete data from disk.', () => {
    expect(IO.deleteFile(testFile), 'IO.deleteFile() is not properly deleting files from the disk.')
      .to.equal(true);
  });
});
