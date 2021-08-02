const carrinho = 
['{"nome": "Borracha", "preco": 3}',
'{"nome": "Lapiz", "preco": 6}',
'{"nome": "Caneta", "preco": 7}']

//console.log(carrinho)

const converter = json => JSON.parse(json);
const value = produt =>produt.nome;

resul = carrinho.map(converter).map(value)
console.log(resul)