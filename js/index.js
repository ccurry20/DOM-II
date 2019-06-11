// Your code goes here

// (1) change button text to red with mouseover
const button = document.getElementsByClassName("btn");
function MouseOver() {
  this.style.color = "red";
}
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("mouseover", MouseOver);
  const eventHandler = event => {
    event.stopPropagation();
  };
}

// (2) change navigation links to blue when you select
const navLinks = document.getElementsByTagName("a");
function clickHandler() {
  this.style.color = "blue";
}
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", clickHandler);
  const eventHandler3 = event => {
    event.preventDefault();
  };
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
  const eventsHandler = event => {
    event.stopPropagation();
  };
}

// (5) load event "Welcome to Fun Bus"
window.addEventListener("load", event => {
  alert("Welcome to Fun Bus");
});

// (6) navigation fontsize change with keydown
const navDown = document.getElementsByTagName("a");
window.addEventListener("keydown", () => {
  for (var i = 0; i < navDown.length; i++) {
    navDown[i].style.fontSize = "2rem";
  }
});

// (7) header(h2) fontsize on mousemove
header = document.querySelectorAll("h2");
function headerFont() {
  this.style.fontSize = "5em";
}
for (var i = 0; i < header.length; i++) {
  header[i].addEventListener("mousemove", headerFont);
}

// (8) When paragraph copied alert "Do not copy"
const para = document.getElementsByTagName("p");
function Copy() {
  alert("Do not Copy");
}
for (var i = 0; i < para.length; i++) {
  para[i].addEventListener("copy", Copy);
}

// (9) title Fun Bus color change with scroll
const title = document.querySelectorAll("h1");
window.addEventListener("scroll", () => {
  for (var i = 0; i < title.length; i++) {
    title[i].style.color = "red";
  }
});

// "(10) View this menu" displays before right click menu
window.addEventListener("contextmenu", () => {
  //for (var i = 0; i)
  alert("View this menu");
});

// (11) scale/zoom images with mouse wheel
let scale = 1;
const el = document.querySelectorAll("img");
el.onwheel = zoom;

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 4);

  for (var i = 0; i < el.length; i++) {
    el[i].style.transform = `scale(${scale})`;
  }
}

for (var i = 0; i < el.length; i++) {
  el[i].addEventListener("wheel", zoom);
}
