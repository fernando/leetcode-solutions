/* 1431. Kids With the Greatest Number of Candies */

function kidsWithCandies(candies: number[], extraCandies: number) {
  let baseGreatestCandies = candies.reduce((p, v) => p > v ? p : v);

  return candies.map((baseCandies) =>
    baseCandies + extraCandies >= baseGreatestCandies
  );
}
