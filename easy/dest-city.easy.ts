/* 1436. Destination City */

function destCity(paths: string[][]) {
  let endCity = "";

  for (const path of paths) {
    const hasDestination = paths.some((path2) => path2[0] === path[1]);
    if (!hasDestination) endCity = path[1];
  }

  return endCity;
}
