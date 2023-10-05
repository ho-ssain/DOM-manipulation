// how to select a element

//1=> getElementById()
//2=> getElementByClassName()
//3=> getElemnetByTag()
//4=> querySelector()
//5=> querySlectorAll()

// const title = document.getElementById("main-heading");
// const list_item = document.getElementsByClassName("list-item");
// const listItem = document.getElementsByTagName("li");
// const container = document.querySelector("div");

// const containerList = document.querySelectorAll("div");

//=> styling elements
// const title = document.querySelector("#main-heading");
// title.style.color = "tomato";

// const listItem = document.querySelectorAll(".list-item");

// for (let i of listItem) {
//   i.style.color = "blue";
// }

//=> creating elements
// var ul = document.querySelector("ul");
// var li = document.createElement("li");
// console.log(li)
//=> adding elements
// ul.append(li);

//=> modifying the text
// const li_1 = document.querySelector(".list-item");
// console.log(li_1.innerText);
// console.log(li_1.textContent);
// console.log(li_1.innerHTML);

// li.innerText = "DC";

//  modifying attributes and classes

// li.setAttribute("id", "li-1");
// li.removeAttribute("id");

// console.log(li.getAttribute("id"));

// li.classList.add("li-1");
// li.classList.remove("li-1");
// li.classList.contains("li-1");

//=> removing elements

// li.remove();

// Traverse the DOM

// Parent Node traversal
// var ul = document.querySelector("ul");

// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

// child node traversal

// console.log(ul.childNodes);

// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// console.log(ul.children);
// console.log(ul.firstElementChild);

// sibling node

// console.log(ul.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

const li = document.querySelector("li");
console.log(li);
console.log(li.classList);
