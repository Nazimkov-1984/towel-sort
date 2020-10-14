
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let y = [], x = 0;
  if (arguments.length === 0 || matrix.length === 0) {
      return [];
      } else {
          x = matrix.length;
          for (let i = 0; i < x; i++) {
              if (i%2 > 0) {
                  matrix[i].sort(function (a,b) {
                      return b-a
                    });
              }
            }
        
          return y = [].concat(...matrix);
      }
}
