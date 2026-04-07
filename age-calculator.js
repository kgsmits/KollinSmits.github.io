
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

const ageElement = document.querySelector(".age");
if (ageElement) ageElement.textContent = `${berekenLeeftijd('2005-02-28')} years old`;
