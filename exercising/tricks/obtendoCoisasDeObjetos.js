
const nomes = {
    nome: 'jorge',
    idade: 33,
    peso: 82.6

}
console.log(Object.nomezinhos)

//pega apenas as chaves
console.log(Object.keys(nomes))

//pega os valores
console.log(Object.values(nomes));

//retorna chave valor
console.log(Object.entries(nomes));

//realizando procedimeto de desestruturar e pegar valores individuais
Object.entries(nomes).forEach(e => {
    console.log(`Chave: ${e[0]} ; Valor ${e[1]}`)
});

console.log('\n')
//realizando procedimeto de desestruturar e pegar valores individuais
//simplificando mais ainda a estrutura
Object.entries(nomes).forEach(([keys, values]) => {
    return console.log(`Chave ${keys} e valor ${values}`);  
});


console.log(Object.entries(nomes))