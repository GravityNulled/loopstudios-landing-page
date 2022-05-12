const ham = document.querySelector(".hambager");
const navLinks = document.querySelector(".links");

ham.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
