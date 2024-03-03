"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

document.body.addEventListener("click", (e) => {
  if (e.target.matches(".show-modal")) {
    showModal();
    return;
  }

  if (e.target.matches(".close-modal") || e.target.matches(".overlay"))
    hideModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) hideModal();
});
