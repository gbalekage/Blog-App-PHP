// Select single elements instead of NodeList
const navItems = document.querySelector(".nav__items");
const openBtn = document.querySelector("#open__nav-btn");
const closeBtn = document.querySelector("#close__nav-btn");

const openNav = () => {
  navItems.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
};

const closeNav = () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

// Hide nav items by default ons mall screens
if (window.innerWidth <= 1024) {
  navItems.style.display = "none";
  closeBtn.style.display = "none";
}
