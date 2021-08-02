const objeto ={ a: 1, b: 2 , c: 3, coisas (){ return a+b+c}}

//convertendo para JSON - formato textual, nao pega a funcao
console.log(JSON.stringify(objeto))

//trazendo de volta
console.log(JSON.parse('{"a": 1, "b":2, "c": 3, "ob":{"nome": "Jorge", "id": 33}}'))


//todos os atributos do JSON sao limitados por aspas duplas
//