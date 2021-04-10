/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const allArr = [];
  const exclArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0 && typeof matrix[i + 1] !== 'undefined') {
        exclArr.push(matrix[i + 1][j]);
      }
      allArr.push(matrix[i][j]);
    }
  }
  const sum = allArr.reduce((a, b) => a + b, 0);
  const red = exclArr.reduce((a, b) => a + b, 0);
  return sum - red;
}

module.exports = getMatrixElementsSum;
