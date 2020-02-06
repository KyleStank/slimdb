# slimdb
SlimDB is still in VERY early stages. There is pretty much nothing written at this point. I still need to plan how I want this library to be used.
Stay tuned for updates!

## Syntax Thoughts
```
import { SlimDB } from 'slimdb';

const db: SlimDB = new SlimDB('db_name.json');

// Properties
public db.path: string;
private db.data: object;

// Functions
public db.load(): void;
public db.save(): void;
public db.update(key: string, value: object): void;

public db.getData(): object;
public db.get(key: string): object;
```
