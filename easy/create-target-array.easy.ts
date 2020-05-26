/* 1389. Create Target Array in the Given Order */

function createTargetArray(nums: number[], index: number[]): number[] {
  const targetArray: number[] = [];

  for (let i = 0; i < index.length; i++) {
    targetArray.splice(index[i], 0, nums[i]);
  }

  return targetArray;
}
