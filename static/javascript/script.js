function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open")
  icon.classList.toggle("open")
  
  document.querySelector(".container").classList.toggle("blur")
}
