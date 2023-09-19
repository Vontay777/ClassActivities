// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction(zero, neon) {
  console.log(zero);
  console.log(neon);
  return zero + neon;
}

// invoke the function and pass in two numbers
myFunction(1, 2);
// invoke the function and pass in more than two numbers
myFunction(1, 2, 3);
// invoke the function and pass in only one number
myFunction(1);
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number
myFunction(7);
// Rest Operator (...)
// add a rest operator to the function's parameters
function yoFunction(zero, guy, ...neon) {
  console.log(zero, guy, neon);
  return zero + guy;
}
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
console.log("below is a msg");
console.log(yoFunction(1, 7, 7));
console.log("im lost");
let damn = yoFunction(1, 7, 7);
console.log(damn);
