
function berekenLeeftijd(geboortedatum) {
  const vandaag = new Date();
  const geboorte = new Date(geboortedatum);
  let leeftijd = vandaag.getFullYear() - geboorte.getFullYear();
  const maandVerschil = vandaag.getMonth() - geboorte.getMonth();
  if (maandVerschil < 0 || (maandVerschil === 0 && vandaag.getDate() < geboorte.getDate())) {
    leeftijd--;
  }
  return leeftijd;
}

document.getElementById("year").textContent = new Date().getFullYear();


function setActiveNav() {
  const currentHash = location.hash || "#/";
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    const route = link.getAttribute("href");
    if (route === currentHash) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("hashchange", setActiveNav);
window.addEventListener("DOMContentLoaded", setActiveNav);
