/* 1342. Number of Steps to Reduce a Number to Zero */

function numberOfSteps(num: number): number {
  let steps = 0;

  while (num > 0) {
    if (num % 2) num--;
    else num = num / 2;
    steps++;
  }

  return steps;
}
