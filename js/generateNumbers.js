export function generateNumbers(){

  const listButtons = [];

  for(let i = 0; i <= 99; i++){
    listButtons.push(
      {
        id: i,
        num: i,
        status: false
      }
    )
  }

  return listButtons
}