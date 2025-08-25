document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const underline = document.querySelector(".underline");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  function moveUnderline(el) {
    const { offsetLeft, offsetWidth } = el;
    underline.style.left = offsetLeft + (offsetWidth * 0.1) + "px"; 
    underline.style.width = offsetWidth * 0.8 + "px";
  }

  const active = document.querySelector("nav a.active");
  if (active) moveUnderline(active);

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      moveUnderline(link);
      nav.classList.remove("active");
      burger.classList.remove("open");
    });
  });

  // бургер меню
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("active");
  });
});
