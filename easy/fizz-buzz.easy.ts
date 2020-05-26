/* 412. Fizz Buzz */

function fizzBuzz(n: number): string[] {
  const output: string[] = [];

  for (let i = 1; i <= n; i++) {
    let stringBuilder = "";

    if (!(i % 3)) stringBuilder += "Fizz";
    if (!(i % 5)) stringBuilder += "Buzz";

    output.push((stringBuilder) ? stringBuilder : String(i));
  }

  return output;
}
