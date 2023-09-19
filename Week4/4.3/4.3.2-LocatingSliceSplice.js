const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexOf("a");
const firstB = arr.indexOf("b");
const firstC = arr.indexOf("c");

console.log(firstA);
console.log(firstB);
console.log(firstC);

// find the last index of "a", "b", and "c"
const LastA = arr.lastIndexOf("a");
const LastB = arr.lastIndexOf("b");
const LastC = arr.lastIndexOf("c");

console.log(LastA);
console.log(LastB);
console.log(LastC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
let multiA = true;

while (multiA) {
  let firstAindex = arr.indexOf("a");
  let lastAindex = arr.lastIndexOf("b");

  multiA = firstAindex !== lastAindex;
  if (multiA) {
    arr.splice(lastAindex, 1);
  }
  console.log("current array");
}
