const menuHamburger = document.getElementById("menu-hamburger"),
  navLinks = document.getElementById("nav-links");
console.log(menuHamburger, navLinks);

/**1- onclick */
menuHamburger.addEventListener("click", () => {
  //manque animation hamburger
  navLinks.classList.toggle("mobile-menu");
});
