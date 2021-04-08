/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let common = 0;
  const a = s1.split('');
  const b = s2.split('');
  a.forEach((el) => {
    if (b.includes(el)) {
      common++;
      b.splice(b.indexOf(el), 1);
    }
  });
  return common;
}

module.exports = getCommonCharacterCount;
