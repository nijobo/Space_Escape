/*
document.querySelector("#efficiency").classList.remove(hide);
document.querySelector("#efficiency").classList.add(fadeIn);

document.querySelector("#requirement").classList.remove(hide);
document.querySelector("#requirement").classList.add(fadeIn);

document
  .querySelector("#requirement")
  .addEventListenerb("animationend", cleanup);

function cleanup() {
  console.log("cleanup");
  document.querySelector("#efficiency").classList.add(fadeIn);
  document.querySelector("#requirement").classList.add(fadeIn);
}
*/
// ---------- HOTSPOTS ----------
const hotspotGul = document.querySelector("#hotspotGul");
const hotspotRod = document.querySelector("#hotspotRod");
const hotspotOrg = document.querySelector("#hotspotOrg");

// Log til konsollen for at tjekke, at elementerne findes
console.log(hotspotGul, hotspotRod, hotspotOrg);

// Tilføj eventlisteners
hotspotGul.addEventListener("mouseover", mouseOverGul);
hotspotGul.addEventListener("mouseout", mouseOutGul);
hotspotGul.addEventListener("click", clickGul);

hotspotRod.addEventListener("mouseover", mouseOverRod);
hotspotRod.addEventListener("mouseout", mouseOutRod);
hotspotRod.addEventListener("click", clickRod);

hotspotOrg.addEventListener("mouseover", mouseOverOrg);
hotspotOrg.addEventListener("mouseout", mouseOutOrg);
hotspotOrg.addEventListener("click", clickOrg);

// ---------- GUL ----------
function mouseOverGul() {
  console.log("mouseOverGul");
  hotspotGul.style.fill = "blue";
}
function mouseOutGul() {
  console.log("mouseOutGul");
  hotspotGul.style.fill = "#fbb040"; // tilbage til original farve
}
function clickGul() {
  console.log("clickGul");
  showInfo(
    "DIY raketten",
    "Den gule zone symboliserer kreativitet og energi.",
    "<h3>Gør det selv</h3><p>Her handler det om innovation og ideudvikling.</p>"
  );
}

// ---------- RØD ----------
function mouseOverRod() {
  console.log("mouseOverRod");
  hotspotRod.style.fill = "lightgray";
}
function mouseOutRod() {
  console.log("mouseOutRod");
  hotspotRod.style.fill = "#ef4136";
}
function clickRod() {
  console.log("clickRod");
  showInfo(
    "Astronaut",
    "Den røde zone står for handling og beslutning.",
    "<h3>Mod det uendelige univers</h3><p>Her sker tingene – fart og resultater.</p>"
  );
}

// ---------- ORANGE ----------
function mouseOverOrg() {
  console.log("mouseOverOrg");
  hotspotOrg.style.fill = "lightgreen";
}
function mouseOutOrg() {
  console.log("mouseOutOrg");
  hotspotOrg.style.fill = "#f26522";
}
function clickOrg() {
  console.log("clickOrg");
  showInfo(
    "Din Grønne Nabo",
    "Spacious travels",
    "<h3>Sig hej til din nye nabo</h3><p>Din nye Mars-villa venter og de orange stepper er klar til at blive udforsket. Glæd dig til at nyerelationer med både nye og gamle beboere, fx Fjong som har boet og været med til at starte bo-fællesskabet mellem os og Mars-boerne.</p>"
  );
}

// ---------- FÆLLES FUNKTION ----------
function showInfo(title, text, efficiencyHTML) {
  const efficiency = document.querySelector("#efficiency");
  const requirement = document.querySelector("#requirement");

  efficiency.classList.remove("hide");
  efficiency.classList.add("fadeIn");

  requirement.classList.remove("hide");
  requirement.classList.add("fadeIn");

  requirement.addEventListener("animationend", cleanup, { once: true });

  document.querySelector(".info-text h2").textContent = title;
  document.querySelector(".info-text p").textContent = text;
  efficiency.innerHTML = efficiencyHTML;
}

// ---------- RENS ANIMATION ----------
function cleanup() {
  console.log("cleanup");
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
