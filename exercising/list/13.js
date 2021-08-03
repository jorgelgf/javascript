
//filtrando apenas numeros dentro de array

const returnNumber = numberReturn =>{

  return numberReturn.filter(item => typeof item === "number")      
}

console.log(returnNumber(['a','b',1,2,3,4,'c']));