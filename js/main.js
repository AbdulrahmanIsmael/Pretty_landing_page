// Define DOM
const navLinks = document.querySelectorAll(".links > li");
const list = document.querySelector(".list");
const links = document.querySelector(".links");
const footer = document.getElementById("footer");

listItemHref();
function listItemHref() {
  navLinks.forEach((link) => {
    const anchor = link.children[0].getAttribute("href");

    link.addEventListener("click", () => {
      window.location.href = anchor;
    });
  });
}

showList();
function showList() {
  list.addEventListener("click", () => {
    links.classList.toggle("show");
  });
}

copyright();
function copyright() {
  const currentYear = new Date().getFullYear();

  footer.innerHTML = `© ${currentYear} <span>Leon</span> All Right Reserved`;
}
