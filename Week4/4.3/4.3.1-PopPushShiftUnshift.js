const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popSomething = nums.pop(1);
let popSomething2 = nums.pop(0);
console.log(popSomething);
console.log(popSomething2);
console.log(
  `popSomething: ${popSomething}, popSomething2: ${popSomething2}, nums: ${nums}`
);
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn = nums.shift(6);
let shiftReturn2 = nums.shift(5);
console.log(shiftReturn);
console.log(shiftReturn2);
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(popSomething2);
nums.push(popSomething);
nums.unshift(shiftReturn);
nums.unshift(shiftReturn2);
console.log(`nums after reassembling: ${nums}`);
