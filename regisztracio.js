document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nev = document.getElementById("nev").value;
  const osztaly = document.getElementById("osztaly").value;

  // Adatok mentése localStorage-be
  const tanulo = { nev, osztaly };
  localStorage.setItem("ujTanulo", JSON.stringify(tanulo));

  // Átdobás tanulók oldalra
  window.location.href = "tanulok.html";
});
