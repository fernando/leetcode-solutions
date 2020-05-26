/* 1295. Find Numbers with Even Number of Digits */

function findNumbers(nums: number[]): number {
  return nums
    .map((num) => String(num).split("").length)
    .filter((num) => !(num % 2)).length;
}
