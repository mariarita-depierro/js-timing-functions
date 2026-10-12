/* 1. mostra un alert 3 secondi dopo il caricamento della pagina*/

/* setTimeout(() => alert("La pagina è stata caricata dopo 3 secondi"), 3000); */

/* 2. al click su un elemento, cambia il colore dello sfondo dopo un ritardo*/

const changeBgEl = document.querySelector(".change-bg");

changeBgEl.addEventListener("click", () => {
  setTimeout(() => changeBgEl.classList.add("bg-yellow-400"), 2000);
});

/* 3. rendi visibile un testo nascosto dopo alcuni secondi dal caricamento*/
const textHiddenEl = document.querySelector(".text-hidden");

setTimeout(() => textHiddenEl.classList.remove("hidden"), 3000);

/* 4. simula un reindirizzamento: al click su un tasto cambia testo di un
paragrafo e ricarica la pagina dopo X secondi */

/* const changeTextBtn = document.querySelector(".change-text-btn");
const textToChange = document.querySelector(".text-to-change");

changeTextBtn.addEventListener("click", () => {
  const newText = `C'era una volta: Topo Gigio`;
  textToChange.innerHTML = newText;
  setTimeout(() => window.location.reload(), 2000);
}); */

/* 5. simula uno stato di "caricamento": cambia il testo di un elemento
appena cliccato un pulsante e cambialo nuovamente dopo qualche secondo */

const changeTextBtnTwo = document.querySelector(".change-text-btn-two");
const textToChangeTwo = document.querySelector(".text-to-change-two");

changeTextBtnTwo.addEventListener("click", () => {
  getNewText(`Minnie e Topolino vanno in montagna`);

  setTimeout(() => getNewText(`Paperina e Paperino vanno all'ospedale`), 3000);
});

function getNewText(text) {
  const newTextTwo = text;
  textToChangeTwo.innerHTML = newTextTwo;
}

/* 6. mostra l'orario corrente aggiornandolo ogni secondo */
const showClockEl = document.querySelector(".show-clock");

setInterval(() => {
  showClockEl.innerHTML = `${new Date().toLocaleTimeString()}`;
}, 1000);

/* 7. fai lampeggiare un titolo alternandone il colore ogni mezzo secondo */

const changeTextColorEl = document.querySelector(".change-text-color");

let isRed = false;

setInterval(() => {
  isRed = !isRed;
  getNewTextColor(isRed);
}, 500);

function getNewTextColor(isThisColor) {
  isThisColor
    ? changeTextColorEl.classList.toggle("text-red-500")
    : changeTextColorEl.classList.toggle("text-sky-600");
}

/* 8. anima una progress bar aumentando la sua larghezza gradualmente fino al 100% */

const progressBarEl = document.querySelector(".progress-bar");

let currentProgress = 0;

const progressInterval = setInterval(() => {
  currentProgress += 10;
  progressBarEl.style.width = `${currentProgress}%`;

  progressBarEl.innerHTML = progressBarEl.style.width;

  if (currentProgress >= 100) {
    clearInterval(progressInterval);
  }
}, 1000);

/* 9. mostra un nuovo numero casuale ogni X secondi */

const showRandomNumEl = document.querySelector(".show-random-number");

setInterval(() => {
  showRandomNumEl.innerHTML = `${Math.floor(Math.random() * 100 + 1)}`;
}, 2000);

/* 10. cambia automaticamente il colore di sfondo della pagina ad intervalli regolari  */

const changeBgColorEl = document.querySelector(".change-bg-color");

let isSky = false;

setInterval(() => {
  isSky = !isSky;
  getNewBgColor(isSky);
}, 1000);

function getNewBgColor(isThisBgColor) {
  isThisBgColor
    ? changeBgColorEl.classList.toggle("bg-sky-300")
    : changeBgColorEl.classList.toggle("bg-white");
}
