declare module 'slimdb' {
  export class IO {
    /**
     * Test!
     * @param filePath path
     */
    static exists(filePath: string): boolean;

    static readFile(filePath: string): string;

    static writeFile<T extends object>(filePath: string, data: T): boolean;

    static deleteFile(filePath: string): boolean;
  }
}
