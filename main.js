document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const underline = document.querySelector(".underline");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");

  function moveUnderline(el) {
    const { offsetLeft, offsetWidth } = el;
    if (!underline) return;
    underline.style.left = offsetLeft + (offsetWidth * 0.1) + "px";
    underline.style.width = offsetWidth * 0.8 + "px";
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const headerHeight = header ? header.offsetHeight : 0;
    const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  const active = document.querySelector("nav a.active");
  if (active) moveUnderline(active);

  // соответствие пунктов меню и секций
  const sectionMap = {
    "Home": "first",
    "Contact": "fifth",
    "Location": "third",
    "About Us": "fourth"
  };

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const text = link.textContent.trim();
      if (sectionMap[text]) {
        scrollToId(sectionMap[text]);
      }

      // визуальное состояние
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      moveUnderline(link);

      // закрываем мобильное меню
      nav.classList.remove("active");
      burger.classList.remove("open");
    });
  });

  // бургер меню
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    nav.classList.toggle("active");
  });

  // кнопка "Lets go" — к #second с учётом фиксированной шапки
  const letsGoBtn = document.querySelector(".first button");
  if (letsGoBtn) {
    letsGoBtn.addEventListener("click", () => {
      scrollToId("second");
    });
  }
});
