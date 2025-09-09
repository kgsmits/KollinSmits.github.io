const routeToPage = {
  "/": "pages/home.html",
  "/Experience": "pages/experience.html",
  "/Resume": "pages/resume.html",
};

function router() {
  const path = location.hash.slice(1) || "/";
  const page = routeToPage[path];
  if (!page) {
    document.getElementById("body").innerHTML = "<h1>404</h1><p>Pagina niet gevonden</p>";
    return;
  }
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.getElementById("body").innerHTML = html;
      // Inject age if Aboutme page
      if (path === "/Resume") {
        const age = berekenLeeftijd('2005-02-28');
        const ageElem = document.querySelector('.age li');
        if (ageElem) ageElem.innerHTML = `Age: ${age} `;
      } else if(path === "/") {
        const age = berekenLeeftijd('2005-02-28');
        const ageElem = document.querySelector('.age');
        if (ageElem) ageElem.innerHTML = `${age} years old`;
      }
    })
    .catch(() => {
      document.getElementById("body").innerHTML = "<h1>404</h1><p>Pagina niet gevonden</p>";
    });
}

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
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
