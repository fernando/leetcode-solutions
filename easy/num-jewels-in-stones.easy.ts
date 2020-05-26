/* 771. Jewels and Stones */

function numJewelsInStones(J: string, S: string): number {
  const jewels = J.split("");
  const stones = S.split("");

  const myJewels = stones.filter((stone) => {
    return jewels.some((jewel) => jewel === stone);
  });

  return myJewels.length;
}
