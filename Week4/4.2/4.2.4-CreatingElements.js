// create a new unordered list (ul) element
const newList = document.createElement("ul");
// remove the paragraph element in the nav-bar
document.querySelector("nav > p").remove;

// add your new ul element to the nav-bar
document.querySelector("nav").add(newList);
// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li");
listItem.textContent = "Item 1";

const listItem2 = document.createElement("li");
listItem2.textContent = "Item 2";
// add the li elements to the ul in the nav-bar
newList.appendChild(listItem);
newList.appendChild(listItem2);
