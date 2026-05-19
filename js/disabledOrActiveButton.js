export function disabledOrActiveButton( btn , list){
  if(list.length !== 50){
    btn.disabled = true;
  }else{
    btn.disabled = false;
  }

}