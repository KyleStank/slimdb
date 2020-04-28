import fs from 'fs';

/**
 * Static class responsible for providing common helper functions that can be used wherever.
 */
class Common {
    /**
     * Checks if a string is empty or not.
     *
     * @param {string} str String to check.
     * @returns {boolean} Returns true if the provided string is empty. Otherwise, returns false.
     */
    static isStringEmpty(str) {
        return typeof (str) === typeof (String()) && str.length <= 0;
    }
}

/**
 * Static class responsible for handling all IO requests.
 */
class IO {
    /**
     * Checks if a file exists.
     *
     * @param {string} filePath Path to file.
     * @returns {boolean} Returns true if the provided file exists. Otherwise, returns false.
     */
    static exists(filePath) {
        return (filePath !== null && filePath !== undefined) && fs.existsSync(filePath);
    }
    /**
     * Reads a JSON file.
     *
     * @param {string} filePath Path to file.
     * @returns {string} Contents of file.
     */
    static readFile(filePath) {
        if (!IO.exists(filePath)) {
            // TODO: Implement error below.
            // eslint-disable-next-line
            // throw new Error(`Cannot read file [${filePath}] because it doesn't exist!`);
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
    static writeFile(filePath, json) {
        if ((filePath === null || filePath === undefined) || (json === null || json === undefined)) {
            throw new Error(`Cannot write file because path [${filePath}] isn't valid!`);
        }
        // Write data to the file.
        fs.writeFileSync(filePath, typeof (json) === typeof (String()) ? json : JSON.stringify(json));
        return true;
    }
    /**
     * Deletes a file from the disk.
     *
     * @param {string} filePath Path to file.
     * @returns {boolean} Returns true if the file was successfully deleted. Otherwise, returns false.
     */
    static deleteFile(filePath) {
        if (!IO.exists(filePath)) {
            throw new Error(`Cannot delete file [${filePath}] because it doesn't exist!`);
        }
        // Delete the file!
        fs.unlinkSync(filePath);
        return true;
    }
}

/**
 * Instance of SlimDB database.
 */
class SlimDB {
    /**
     * Create new SlimDB instance.
     *
     * @param {string} path Path to database.
     */
    constructor(path) {
        this.path = path;
        this.data = this.load();
    }
    /**
     * Loads the database.
     */
    load() {
        const contents = IO.readFile(this.path);
        return !Common.isStringEmpty(contents) ? JSON.parse(contents) : {};
    }
    /**
     * Saves the database.
     */
    save() {
        IO.writeFile(this.path, this.data);
    }
    /**
     * Returns all data in the database.
     */
    get() {
        return this.data;
    }
    /**
     * Update data in the database.
     *
     * @param {Function} callback Callback that should modify data and return the result.
     */
    update(callback) {
        if (typeof (callback) !== typeof (Function())) {
            throw new Error('Cannot update data without a valid callback!');
        }
        // Invoke callback.
        this.data = callback(this.data);
    }
    /**
     * Delete the database file.
     */
    delete() {
        IO.deleteFile(this.path);
        this.data = {};
    }
}

export { Common, IO, SlimDB };
//# sourceMappingURL=index.es.js.map
