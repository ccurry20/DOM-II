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

// (4) double click images "Fun in the Sun"
const imgAlert = document.querySelectorAll("img");
const doubleClick = function() {
  alert("Fun in the Sun");
};
for (var i = 0; i < imgAlert.length; i++) {
  imgAlert[i].addEventListener("dblclick", doubleClick);
}

// (5) load event "Welcome to Fun Bus"
window.addEventListener("load", event => {
  alert("Welcome to Fun Bus");
});

// (6) navigation fontsize change with keydown
const navDown = document.getElementsByTagName("a");
window.addEventListener("keydown", () => {
  for (var i = 0; i < imgAlert.length; i++) {
    navDown[i].style.fontSize = "2rem";
  }
});
