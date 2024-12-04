const { open } = require("node:fs/promises");

const getSimilarityScore = async () => {
  const file = await open("./day1/input");
  let list1 = [];
  let map2 = {};

  for await (const line of file.readLines()) {
    const input = line.match(/[^ ]+/g);

    if (!map2[input[1]]) {
      map2[input[1]] = 0;
    }

    list1.push(input[0]);
    map2[input[1]] += 1;
  }

  let similarityScore = 0;
  list1.forEach((entry) => {
    if (map2[entry]) {
      similarityScore += entry * map2[entry];
    }
  });
  return similarityScore;
};

console.log(await getSimilarityScore());
