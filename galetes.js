document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptBtn = document.getElementById("acceptCookies");
    const receptesVisitadesContainer = document.getElementById("receptesVisitadesContainer");
    const toggleVisitades = document.getElementById("toggleVisitades");

    // Inicialment, amaguem la llista
    receptesVisitadesContainer.style.display = "none";

    // Comprovar si ja s'han acceptat les galetes
    if (localStorage.getItem("galetesAcceptades") === "true") {
        cookieConsent.style.display = "none";
        receptesVisitadesContainer.style.display = "block";
    } else {
        toggleVisitades.style.display = "none";
        cookieConsent.style.display = "flex";
    }

    // Quan l'usuari accepta
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("galetesAcceptades", "true");
        cookieConsent.style.display = "none";
        toggleVisitades.style.display = "block";
        receptesVisitadesContainer.style.display = "block";

        // Afegir la recepta actual a la llista si es passa per URL
        afegirReceptaActual();
        mostrarReceptesVisitades();
    });
});

// Funció per afegir la recepta actual a la llista
function afegirReceptaActual() {
    if (localStorage.getItem("galetesAcceptades") === "true") {
        const params = new URLSearchParams(window.location.search);
        const receptaId = parseInt(params.get("nom"));
        if (receptaId) {
            let receptesVisitades = JSON.parse(localStorage.getItem("receptesVisitades") || "[]");
            if (!receptesVisitades.includes(receptaId)) {
                receptesVisitades.push(receptaId);
            }
            localStorage.setItem("receptesVisitades", JSON.stringify(receptesVisitades));
        }
    }
}

// Funció per mostrar les receptes visitades i missatge de victòria
function mostrarReceptesVisitades() {
    const llista = document.getElementById("receptesVisitades");
    const victòria = document.getElementById("text victoria");
    llista.innerHTML = "";
    victòria.textContent = "";

    const receptesVisitades = JSON.parse(localStorage.getItem("receptesVisitades") || "[]");
    let totesVisitades = true;

    for (let i = 1; i <= 30; i++) {
        const li = document.createElement("li");
        const recepta = receptes[i];

        if (receptesVisitades.includes(i) && recepta) {
            li.textContent = i + " " + recepta.name;
        } else {
            li.textContent = ""; // espai en blanc
            totesVisitades = false;
        }
        llista.appendChild(li);
    }

    // Si totes les receptes estan visitades, mostrar missatge
    if (totesVisitades) {
        victòria.textContent = "🎉🎉🎉Enhorabona! Has visitat totes les receptes!🎉🎉🎉";
    }
}

// Quan carreguem la pàgina, afegim la recepta actual i mostrem la llista
document.addEventListener("DOMContentLoaded", () => {
    afegirReceptaActual();
    if (localStorage.getItem("galetesAcceptades") === "true") {
        mostrarReceptesVisitades();
    }
});

// Botó per desplegar/replegar el panell lateral
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleVisitades");
    const container = document.getElementById("receptesVisitadesContainer");

    toggleBtn.addEventListener("click", () => {
        container.classList.toggle("active");
        // Canviar la fletxa segons estat
        toggleBtn.textContent = container.classList.contains("active") ? "⟩" : "⟨";
    });
});