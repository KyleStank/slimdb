/**
 * Instance of SlimDB database.
 */
export declare class SlimDB<T extends object> {
    path: string;
    private data;
    /**
     * Create new SlimDB instance.
     *
     * @param {string} path Path to database.
     */
    constructor(path: string);
    /**
     * Loads the database.
     */
    load(): T;
    /**
     * Saves the database.
     */
    save(): void;
    /**
     * Returns all data in the database.
     */
    get(): T;
    /**
     * Update data in the database.
     *
     * @param {Function} callback Callback that should modify data and return the result.
     */
    update(callback: Function): void;
    /**
     * Delete the database file.
     */
    delete(): void;
}
