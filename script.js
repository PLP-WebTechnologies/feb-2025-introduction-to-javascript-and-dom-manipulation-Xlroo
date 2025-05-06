const title = document.getElementById("title");
title.textContent = "What happened!"; // Updates text

const text = document.getElementById("text");
text.style.color = "blue"; // Changes text color
text.style.fontSize = "20px"; // Changes font size 

const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
}); 