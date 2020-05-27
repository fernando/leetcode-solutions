/* 832. Flipping an Image */

function flipAndInvertImage(A: number[][]) {
  let reverse = [];

  for (let i = 0; i < A.length; i++) {
    const rowContainer = [];

    for (let j = A[i].length - 1; j >= 0; j--) {
      rowContainer.push(A[i][j]);
    }

    reverse.push(rowContainer);
  }

  for (let i = 0; i < reverse.length; i++) {
    for (let j = 0; j < reverse[i].length; j++) {
      reverse[i][j] = 1 - reverse[i][j];
    }
  }

  return reverse;
}
