"use strict";

document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () => {

  if(question.parentNode.classList.contains("active")) {
    question.parentNode.classList.toggle("active")
  } else {
    document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active");
  }
  
}));


document.addEventListener("click", (event) => {
  const questionsAnswerAccordian = document.querySelectorAll(".question");

  if (!event.target.closest(".question")) {
  questionsAnswerAccordian.forEach((question) => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.remove("active");
      }
    });
  }
});



