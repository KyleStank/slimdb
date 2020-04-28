/**
 * Static class responsible for handling all IO requests.
 */
export declare class IO {
    /**
     * Checks if a file exists.
     *
     * @param {string} filePath Path to file.
     * @returns {boolean} Returns true if the provided file exists. Otherwise, returns false.
     */
    static exists(filePath: string): boolean;
    /**
     * Reads a JSON file.
     *
     * @param {string} filePath Path to file.
     * @returns {string} Contents of file.
     */
    static readFile(filePath: string): string;
    /**
     * Writes data as JSON to a file.
     *
     * @param {string} filePath Path to file.
     * @param {T} json JSON data to write.
     * @returns {boolean} Returns true if data was written successfully. Otherwise, returns false.
     */
    static writeFile<T extends object>(filePath: string, json: T): boolean;
    /**
     * Deletes a file from the disk.
     *
     * @param {string} filePath Path to file.
     * @returns {boolean} Returns true if the file was successfully deleted. Otherwise, returns false.
     */
    static deleteFile(filePath: string): boolean;
}
