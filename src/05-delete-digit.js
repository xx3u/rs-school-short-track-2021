/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = String(n).split('');
  const newArr = [];
  for (let i = 0; i < nStr.length; i++) {
    const nStrCopy = [...nStr];
    nStrCopy.splice(i, 1);
    const num = nStrCopy.join('');
    newArr.push(+num);
  }
  const max = Math.max(...newArr);
  return max;
}

module.exports = deleteDigit;
