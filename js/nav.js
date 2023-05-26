const navElement = document.querySelector("nav");
const hrNavElement = document.getElementById("navHr");
function onLoadNav() {
  navElement.classList.add("open");
  hrNavElement.classList.add("open");
}

window.addEventListener("DOMContentLoaded", onLoadNav);
