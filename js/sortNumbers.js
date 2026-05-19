export function sortNumbers() {

  const listSort = [];

  while(listSort.length !== 20){
    const num = Math.floor(Math.random() * 100);

    if(!listSort.some( el => el.num === num)){
      listSort.push(
        {
          id: listSort.length,
          num,
          status: false
        }
      )
    }

  }
  return listSort
}