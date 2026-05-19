export function resultGaming( listChosen, listSort){

  return listChosen.map( el => {

    const acertou = listSort.some( element => {
      return Number(element.num) === Number(el.num)
    })

    if(acertou){
      return{
        ...el,
        status: "hit"
      }      
    }

    return {
      ...el,
      status: false
      }

  })

}