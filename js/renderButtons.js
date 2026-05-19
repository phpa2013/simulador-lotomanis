export function renderButtons( local, list ){

  local.textContent = "";

  const fragment = document.createDocumentFragment();

  list.forEach( el => {
    
    const btn = document.createElement("button");
    btn.dataset.id = el.id;
    btn.dataset.number = el.num;
    btn.textContent = el.num;

    if(el.status){
      btn.className = "escolhido"
    }

    if(el.status === "hit"){
      btn.className = "hit"
    }

    

    fragment.appendChild(btn);
  });

  local.appendChild(fragment);
}