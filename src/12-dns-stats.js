/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newArr = [];
  const count = [];
  for (let i = 0; i < domains.length; i++) {
    newArr.push(domains[i]);
    let sum = 0;
    for (let j = 0; j < domains.length; j++) {
      if (domains[j].includes(domains[i])) {
        sum += 1;
      }
    }
    count.push(sum);
  }
  const arr = [];
  for (let i = 0; i < domains.length; i++) {
    arr[i] = domains[i].split('.');
    const x = [];
    for (let j = arr[i].length - 1; j >= 0; j--) {
      x.push(arr[i][j]);
    }
    arr[i] = x.join('.');
  }
  let obj = {};
  if (domains.length !== 0) {
    obj = { '.com': domains.length };
    for (let k = 0; k < arr.length; k++) {
      obj['.'.concat(arr[k])] = count[k];
      obj = { ...obj, ...obj[arr[k]] };
    }
  }
  return obj;
}

module.exports = getDNSStats;
