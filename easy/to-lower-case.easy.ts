/* 709. To Lower Case */

function toLowerCase(str: string) {
  const difference = ("a".charCodeAt(0) - "A".charCodeAt(0));

  return [...str]
    .map((char) => {
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(char.charCodeAt(0) + difference);
      } else {
        return char;
      }
    })
    .join("");
}
