/* 1365. How Many Numbers Are Smaller Than the Current Number */

function smallerNumbersThanCurrent(nums: number[]) {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] > nums[j]) count++;
    }

    output.push(count);
  }

  return output;
}
