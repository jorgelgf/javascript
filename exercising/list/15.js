
const receberSomenteOsParesDeIndicesPares = pares =>{
  let i =0;
  let valor =[];


  //filtrando um valor par e um indice par de um vetor
return pares.filter((valor,ind) => valor%2==0 && ind%2==0  )
}

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [)