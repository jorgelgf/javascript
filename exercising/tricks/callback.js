
const notas = [1.1,2.2,3.8,9,10,7.2]

console.log(notas)

//callback
//a função está percorrendo todo array e pegando apenas
//a condição notas<7, usando o filter
const lowNote = notas.filter( (notas) => notas<7 );

console.log("notas: "+notas);