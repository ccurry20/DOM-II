// Your code goes here

// (1) change button text to red with mouseover
const button = document.getElementsByClassName("btn");
function MouseOver() {
  this.style.color = "red";
}
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", MouseOver);
}

// (2) change navigation links to blue when you select
const navLinks = document.getElementsByTagName("a");
function clickHandler() {
  this.style.color = "blue";
}
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", clickHandler);
}

// (3) button click says "thanks!"
const buttonAlert = document.getElementsByClassName("btn");
function handler1() {
  alert("Thanks");
}
for (var i = 0; i < buttonAlert.length; i++) {
  buttonAlert[i].addEventListener("click", handler1);
}

// (4) double click images
const imgAlert = document.querySelectorAll("img");
const doubleClick = function() {
  alert("Fun in the Sun");
};
for (var i = 0; i < imgAlert.length; i++) {
  imgAlert[i].addEventListener("dblclick", doubleClick);
}

//pointer over images

// (1) change button to green with mouseover
//const button = document.getElementsByClassName("btn");
//const clickHandler = function() {
//button.style.color = "red";
//};
//button.addEventListener("mouseover", clickHandler);

//(2) change button text
//const button = document.getElementsByClassName("btn");
//const btnText = function() {
//button.textContent = "Click Here";
//};
//button.addEventListener("mouseover", btnText);

// (3) change navigation links to blue when you select
//const navLinks = document.getElementsByTagName("a");
//navLinks.addEventListener("select", event => {
//event.target.style.color = "blue";
//});

//(4) hover over pics
//const pics = document.getElementsById("img");
//pics.addEventListener("mouseover", event => {
//event.target.style. = "blue";
//});
