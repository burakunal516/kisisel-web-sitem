
document.getElementById("year").textContent = new Date().getFullYear();

const links = document.querySelectorAll(".nav-link");
const menu = document.getElementById("menu");

links.forEach(link => {
    link.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
