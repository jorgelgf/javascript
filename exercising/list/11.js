

const receberPrimeiroEUltimoElemento = fistAndLast =>{
  let aux = {};
  aux[0] = fistAndLast[0];
  aux[1] = fistAndLast[fistAndLast.length -1]
  return aux;
}
console.log(receberPrimeiroEUltimoElemento([10,2,4,"ola"]))
