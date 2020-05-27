/* 1323. Maximum 69 Number */

function maximum69Number(num: number): number {
  let numArray = [...String(num)].map(Number);

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] === 6) {
      numArray[i] = 9;
      break;
    }
  }

  return Number(numArray.join(""));
}
