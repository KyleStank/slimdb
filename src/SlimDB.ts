import { Common } from './Common';
import { IO } from './IO';

/**
 * Instance of SlimDB database.
 */
export class SlimDB<T extends object> {
  public path: string;
  private data: T;

  /**
   * Create new SlimDB instance.
   * 
   * @param {string} path Path to database.
   */
  constructor(path: string) {
    this.path = path;
    this.data = this.load();
  }

  /**
   * Loads the database.
   */
  public load(): T {
    const contents = IO.readFile(this.path);
    return !Common.isStringEmpty(contents) ? JSON.parse(contents) as T : {} as T;
  }

  /**
   * Saves the database.
   */
  public save(): void {
    IO.writeFile(this.path, this.data);
  }

  /**
   * Returns all data in the database.
   */
  public get(): T {
    return this.data;
  }

  /**
   * Update data in the database.
   * 
   * @param {Function} callback Callback that should modify data and return the result.
   */
  public update(callback: Function): void {
    if (typeof(callback) !== typeof(Function())) {
      throw new Error('Cannot update data without a valid callback!');
    }

    // Invoke callback.
    this.data = callback(this.data) as T;
  }

  /**
   * Delete the database file.
   */
  public delete(): void {
    IO.deleteFile(this.path);
    this.data = {} as T;
  }
}
