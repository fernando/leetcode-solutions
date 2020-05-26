/* 1313. Decompress Run-Length Encoded List */

function decompressRLElist(nums: number[]): number[] {
  let output: number[] = [];

  for (let i = 0; i < nums.length; i += 2) {
    output = output.concat(Array(nums[i]).fill(nums[i + 1]));
  }

  return output;
}
