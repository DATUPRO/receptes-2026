const params = new URLSearchParams(window.location.search);
const nom = params.get("nom") ?? "1";
const recepta = receptes[nom];

function renderList(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>` + items.map(item => {
    if (Array.isArray(item)) {
      const [title, ...rest] = item;
      return `<li><strong>${title}</strong>${renderList(rest, ordered)}</li>`;
    } else {
      return `<li>${item}</li>`;
    }
  }).join("") + `</${tag}>`;
}

if (recepta) {
  document.getElementById("titol").textContent = recepta.name;
  document.getElementById("origen").textContent = recepta.origen;
  if (recepta.intro) {
    document.getElementById("intro").textContent = recepta.intro;
  }
  const linkElem = document.getElementById("link");
  if (recepta.link) {
    linkElem.href = recepta.link;
    linkElem.style.display = "inline";
  } else {
    linkElem.style.display = "none";
  }
  if (Array.isArray(recepta.ingredients)) {
    document.getElementById("ingredients").innerHTML = renderList(recepta.ingredients, false);
  }

  if (Array.isArray(recepta.elavoracio)) {
    document.getElementById("elavoracio").innerHTML = renderList(recepta.elavoracio, true);
  }
  if (recepta.imatge) {
    document.getElementById("imatge").src = recepta.imatge;
    document.getElementById("imatge").alt = `Imatge de ${recepta.name}`;
  }
  if (Array.isArray(recepta.notes)) {
    document.getElementById("notes").innerHTML = renderList(recepta.notes, false);
  }
  else {
    document.getElementById("textNotes").style.display = "none";
  }

} else {
  document.querySelector(".recepta").innerHTML = "<p>Recepta no trobada.</p>";
}
