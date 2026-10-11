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

const changeTextBtn = document.querySelector(".change-text-btn");
const textToChange = document.querySelector(".text-to-change");

changeTextBtn.addEventListener("click", () => {
  const newText = `C'era una volta: Topo Gigio`;
  textToChange.innerHTML = newText;
  setTimeout(() => window.location.reload(), 2000);
});

/* 5. simula uno stato di "caricamento": cambia il testo di un elemento
appena cliccato un pulsante e cambialo nuovamente dopo qualche secondo */

/* 6. mostra l'orario corrente aggiornandolo ogni secondo */

/* 7. fai lampeggiare un titolo alternandone il colore ogni mezzo secondo */

/* 8. anima una progress bar aumentando la sua larghezza gradualmente fino al 100% */

/* 9. mostra un nuovo numero casuale ogni X secondi */

/* 10. cambia automaticamente il colore di sfondo della pagina ad intervalli regolari  */
