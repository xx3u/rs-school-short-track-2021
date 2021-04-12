/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  let result;
  while (low <= high) {
    const mid = (low + high);
    const num = array[mid];
    if (num === value) {
      result = mid;
    } if (num > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

module.exports = findIndex;
