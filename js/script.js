let header = document.querySelector(".header");
let navToggler = document.querySelector("#header__nav-toggler");

navToggler.addEventListener("click", () => {
  if (header.getAttribute("data-mb-nav-is-shown") === "false") {
    header.setAttribute("data-mb-nav-is-shown", "true");
  } else header.setAttribute("data-mb-nav-is-shown", "false");
});

let questions = document.getElementsByClassName("questions__question");
var index = 0;

for (; index < questions.length; index++) {
  questions[index].addEventListener("click", (event) => {
    let answer = event.target.nextElementSibling;
    if (answer.style.display === "none") answer.style.display = "block";
    else answer.style.display = "none";
  });
}
