import { expect } from 'chai';

import { IO } from '../src/IO';
import { SlimDB } from '../src/SlimDB';

interface IConfigData {
  useDarkTheme: boolean;
  maxUsers: number;
}

interface IUserData {
  email: string;
  first: string;
  last: string;
}

interface IRandomData {
  users: Array<IUserData>;
  config: IConfigData;
}

const dbPath = 'data.test.json';

describe(`${__dirname}/SlimDB.ts (class)`, () => {
  const db = new SlimDB<IRandomData>(`${__dirname}/${dbPath}`);
  it('Should properly created SlimDB instance.', () => {
    expect(db, 'new SlimDB() is null. Why?')
      .to.not.equal(null)
      .and.to.not.equal(undefined);
  });

  it('Should properly load DB files.', () => {
    const data: IRandomData = db.load();
    expect(data, 'SlimDB.load() returns null. Why?')
      .to.not.equal(null)
      .and.to.not.equal(undefined);
  });

  it('Should properly update DB files.', () => {
    db.update((data: IRandomData): IRandomData => {
      data.users = [];
  
      return data;
    });

    expect(db.get().users.length, 'SlimDB.update() is not functioning properly.')
      .to.equal(0);
  });

  it('Should properly save DB files.', () => {
    db.save();

    db.update((data: IRandomData): IRandomData => {
      data.users = [
        {
          email: 'example@example.com',
          first: 'Cool',
          last:  'Example'
        }
      ];

      return data;
    });

    db.save();
    db.load();

    expect(db.get().users[0].first, 'SlimDB.save() is not properly saving data.')
      .to.equal('Cool');
  });

  it('Should properly delete DB files.', () => {
    expect(IO.exists(db.path), 'SlimDB.delete() can\'t be tested because the file being deleted doesn\'t exist.')
      .to.equal(true);

    db.delete();

    expect(IO.exists(db.path), 'SlimDB.delete() is not properly working.')
      .to.equal(false);
  });
});
