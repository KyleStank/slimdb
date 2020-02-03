/**
 * Static class responsible for providing common helper functions that can be used wherever.
 */
export class Common {
  /**
   * Checks if a string is empty or not.
   * 
   * @param {string} str String to check.
   * @returns {boolean} Returns true if the provided string is empty. Otherwise, returns false.
   */
  static isStringEmpty(str: string): boolean {
    return typeof(str) === typeof(String()) && str.length <= 0;
  }
}
