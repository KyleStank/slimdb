import { Common } from './Common';
import { IO } from './IO';

/**
 * Instance of SlimDB database.
 */
export class SlimDB<T extends object> {
  public path: string;
  private data: T;

  constructor(path: string) {
    this.path = path;
    this.data = this.load();
  }

  public load(): T {
    const contents = IO.readFile(this.path);
    return !Common.isStringEmpty(contents) ? JSON.parse(contents) as T : {} as T;
  }

  public save(): void {
    IO.writeFile(this.path, this.data);
  }

  public get(): T {
    return this.data;
  }

  public update(callback: Function): void {
    if (typeof(callback) !== typeof(Function())) {
      return;
    }

    // Invoke callback.
    this.data = callback(this.data) as T;
  }

  public delete(): void {
    IO.deleteFile(this.path);
    this.data = {} as T;
  }
}
