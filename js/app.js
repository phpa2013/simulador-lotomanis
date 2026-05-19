import { generateNumbers } from "./generateNumbers.js";
import { renderButtons } from "./renderButtons.js";
import { sortNumbers } from "./sortNumbers.js";
import { toggleStatus  } from "./toggleStatus.js";
import { disabledOrActiveButton } from "./disabledOrActiveButton.js";
import { resultGaming } from "./resultGaming.js";

const contentBtns = document.querySelector(".contentBtns");
const contentSorteio = document.querySelector(".contentSorteio")
const feedback = document.querySelector("#feedback");

const btnStart = document.querySelector(".start");
btnStart.disabled = true

const btnRestart = document.querySelector(".restart")

let listBtns = generateNumbers()
let listSort = sortNumbers()
let listChosen = [];

//eventos

window.addEventListener("DOMContentLoaded", ()=> {
  renderButtons(contentBtns, listBtns);

})

//evento de clique na lista de botões
contentBtns.addEventListener("click", (e)=> {
  const btn = e.target.closest("button");
  if(!btn) return;

  const idBtn = btn.dataset.id;

  
  listBtns = toggleStatus( idBtn, listBtns );

  listChosen = listBtns.filter( el => el.status);
  
  disaledOrActiveButton(btnStart, listChosen)

  renderButtons(contentBtns, listBtns);
  feedback.textContent = listChosen.length;
})

//evento no botão de jogar

btnStart.addEventListener("click", ()=> {
  if(listSort.length !== 20){
    alert("Sorteio não realizado");
    return
  }

  const listResult = resultGaming(listChosen, listSort);

  contentBtns.style.display = "none"
  
  contentSorteio.style.display = "grid"

  renderButtons(contentSorteio, listResult);

})  

btnRestart.addEventListener("click", ()=> {
  
  listBtns = generateNumbers()
  listSort = sortNumbers()
  listChosen = [];

  
  contentBtns.style.display = "grid"

  contentSorteio.style.display = "none"

  disaledOrActiveButton(btnStart, listChosen)

  renderButtons(contentBtns, listBtns);
  
  feedback.textContent = listChosen.length;
})