import acid from '../namespace/index';
import { assign } from '../internal/object';
/**
   * Perform alphabetical sort on a collection with the provided key name. Mutates the array.
   *
   * @function sortAlphabetical
   * @category array
   * @type {Function}
   * @param {Array} array - Array to be sorted.
   * @returns {Array} The sorted array.
   *
   * @example
   * sortAlphabetical([1,2,3]);
   * // => 1
 */
export const sortAlphabetical = (collection, key) => {
  return collection.sort((current, next) => {
    const currentKey = current[key];
    const nextKey = next[key];
    if (currentKey < nextKey) {
      return -1;
    } else if (currentKey > nextKey) {
      return 1;
    }
    return 0;
  });
};
assign(acid, {
  sortAlphabetical
});
