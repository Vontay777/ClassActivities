// select the root node
document.querySelector("body");
console.log("body");

// select the last child of the root node
const lastChild = document.querySelector("body").lastElementChild;
console.log(lastChild);
// select all the children of the body element
const AllChildren = document.querySelector("body").children;
console.log(AllChildren);
// select the next sibling of h2 node
const h2Node = document.querySelector("h2").nextElementSibling;
const sibling = h2Node.nextElementSibling;
console.log(sibling);
// select the parent element of the h1 node
const h1Node = document.querySelector("h1").parentElement;
const h1Parent = h1Node.parentElement;
console.log(h1Parent);
