const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const sidebar = document.getElementById("sidebar");

openMenu.addEventListener("click", () => {
    sidebar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    sidebar.classList.remove("open");
});

fetch("appointment.html")
  .then(response => response.text())
  .then(data => {
      document.getElementById("navbar").innerHTML = data;
  });
