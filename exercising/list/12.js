
const removerPropriedade = (a1,a2)=>{
  copia = a1;
  console.log(a1) 

  //deletando apenas a opcao do parâmetro dentro da array
  delete copia[a2]

//retornando copia
return copia;
}


console.log(removerPropriedade(
  {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
  }, "descricao"))