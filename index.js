"use strict";

const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const btnRates = document.querySelectorAll(".btn-rate");
const selectedRate = document.querySelector(".selected-rate");
const btnSubmit = document.getElementById("submit");

btnSubmit.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.classList.add("hidden");
});

btnRates.forEach((btn) => {
  btn.addEventListener(
    "click",
    () => (selectedRate.textContent = btn.textContent)
  );
});
