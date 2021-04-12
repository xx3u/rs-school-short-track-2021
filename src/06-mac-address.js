/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new Error('Not implemented');
  const check = [];
  if (n.length === 17) {
    const nSplit = n.split('-');
    const reg = /[0-9A-F]/;
    if (nSplit.length === 6) {
      for (let i = 0; i < nSplit.length; i++) {
        for (let j = 0; j < 2; j++) {
          check.push(reg.test(nSplit[i][j]));
        }
      }
    }
  } else {
    return false;
  }
  return check.every((el) => el === true);
}

module.exports = isMAC48Address;
