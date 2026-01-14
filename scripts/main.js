// =============================================
// DESN 378: Code + Design 2
// Your JavaScript will live here.
//
// This file will grow throughout the quarter
// as you learn to make the web behave.
// =============================================

document.addEventListener('DOMContentLoaded', () => {
 const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Let's Play, ${myName}`;
  }
}
/*
  SUMMARY:
  This file does two things:
  1. I added an 8 ball to the image changer because I felt it fit for the size and shape. 
  I also had an idea to change the back to be similar to a pool table.
  2. The message plays of the 8 ball and the background because it looks like a game of pool.
  The key pattern I learned: I learned how to use change images with clicking, it was hard to get it at first because
  I didn;t initally change the image name in html and I was struggle trying to figure out why my image wasn't working. 
*/



  console.log('Portfolio loaded');

  // Week 0: Hello World!
  alert('Hello World!');
});


// Week 1: You'll add theme toggle code here
// Week 2: You'll add localStorage persistence here
// Week 3+: More to come...
