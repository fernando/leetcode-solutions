/* 1281. Subtract the Product and Sum of Digits of an Integer */

function subtractProductAndSum(n: number): number {
  const digitsAsString = [...String(n)];
  const digits = digitsAsString.map(Number);

  return digits.reduce((ac, cr) => ac * cr) -
    digits.reduce((ac, cr) => ac + cr);
}
