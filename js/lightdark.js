/***** light/darkmode *****/

// const html = document.querySelector("html");
// const togglebtn = document.querySelector("#btn_tog");

// function toggleTheme() {
//   html.classList.toggle("dark");
// }

// togglebtn.addEventListener("click", toggleTheme);

const html = document.querySelector("html");
const btn = document.querySelector("#theme-toggle");

function toggleTheme() {
  // giver knappen class "dark" → knob slider
  btn.classList.toggle("dark");

  // giver html class "dark" → dit tema skifter
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
