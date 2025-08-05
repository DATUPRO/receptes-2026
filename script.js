const params = new URLSearchParams(window.location.search);
const nom = params.get("nom") ?? "paella";
const recepta = receptes[nom];

if (recepta) {
  document.getElementById("titol").textContent = recepta.name;
  document.getElementById("descripcio").textContent = recepta.descripcio;
  document.getElementById("preu").textContent = recepta.preu;
} else {
  document.querySelector(".recepta").innerHTML = "<p>Recepta no trobada.</p>";
}
