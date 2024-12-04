const { open } = require("node:fs/promises");

const getDistance = async () => {
  const file = await open("./day1/input");
  let list1 = [];
  let list2 = [];

  for await (const line of file.readLines()) {
    const input = line.match(/[^ ]+/g);
    list1.push(input[0]);
    list2.push(input[1]);
  }

  list1.sort();
  list2.sort();

  let distance = 0;
  for (let i = 0; i < list1.length; i++) {
    distance += Math.abs(list1[i] - list2[i]);
  }
  return distance;
};

console.log(await getDistance());
