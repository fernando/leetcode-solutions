/* 1221. Split a String in Balanced Strings */

function balancedStringSplit(s: string) {
  let charArray = [...s];
  let splitsCount = 0;

  let rAmt = 0;
  let lAmt = 0;

  for (let i = 0; i < charArray.length; i++) {
    switch (charArray[i]) {
      case "R":
        rAmt++;
        break;
      case "L":
        lAmt++;
        break;
    }

    if (rAmt !== lAmt) continue;

    splitsCount++;
    rAmt = 0;
    lAmt = 0;
  }

  return splitsCount;
}
