
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let Matrix = [];
  if (matrix.length === 0){return[]};
  if (matrix == undefined){return[]};
  for (i = 0; i < matrix.length; i++){
    for(j = 0; j < matrix[i].length; j++){
        if (i % 2 == 0){
            Matrix.push(matrix[i][j]);
        } else {
            Matrix.push(matrix[i][matrix[i].length-j-1]);
        }
    }
  }
  return Matrix;
}
