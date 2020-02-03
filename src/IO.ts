import fs from 'fs';

/**
 * Static class responsible for handling all IO requests.
 */
export class IO {
  /**
   * Checks if a file exists.
   * 
   * @param {string} filePath Path to file.
   * @returns {boolean} Returns true if the provided file exists. Otherwise, returns false.
   */
  static exists(filePath: string): boolean {
    return (filePath !== null && filePath !== undefined) && fs.existsSync(filePath);
  }

  /**
   * Reads a JSON file.
   * 
   * @param {string} filePath Path to file.
   * @returns {string} Contents of file.
   */
  static readFile(filePath: string): string {
    if (!IO.exists(filePath)) {
      return '';
    }

    return fs.readFileSync(filePath, 'utf8').toString();
  }

  /**
   * Writes data as JSON to a file.
   * 
   * @param {string} filePath Path to file.
   * @param {T} json JSON data to write.
   * @returns {boolean} Returns true if data was written successfully. Otherwise, returns false.
   */
  static writeFile<T extends object>(filePath: string, json: T): boolean {
    if ((filePath === null || filePath === undefined) || (json === null || json === undefined)) {
      return false;
    }

    // Write data to the file.
    fs.writeFileSync(filePath, typeof(json) === typeof(String()) ? json : JSON.stringify(json));

    return true;
  }

  /**
   * Deletes a file from the disk.
   * 
   * @param {string} filePath Path to file.
   * @returns {boolean} Returns true if the file was successfully deleted. Otherwise, returns false.
   */
  static deleteFile(filePath: string): boolean {
    if (!IO.exists(filePath)) {
      return false;
    }

    // Delete the file!
    fs.unlinkSync(filePath);

    return true;
  }
}
