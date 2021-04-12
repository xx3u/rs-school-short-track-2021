/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];
  const count = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] || i === 0) {
      newArr.push(arr[i]);
      count.push(1);
    } else {
      count[count.length - 1] += 1;
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    if (count[j] === 1) {
      count[j] = '';
    }
    result.push(String(count[j]).concat(newArr[j]));
  }
  return result.join('');
}

module.exports = encodeLine;
