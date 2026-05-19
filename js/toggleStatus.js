export function toggleStatus(id , list){

  const sortedMax = list.filter( el => el.status);

  return list.map( el => {    

    if(Number(el.id) === Number(id)){

    if(el.status){
      return{
        ...el,
        status: false
      }
    }

    if(sortedMax.length >= 50){
      return el
    }

    return{...el,
      status: true
    }    

    }
    return el
  })

}