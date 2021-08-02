
//objeto no formato json
const carrinho = 
['{"nome": "Lapiz", "preco": 3}',
'{"nome": "Caneta", "preco": 5}']

const texj = json => JSON.parse(json);
const value = produt => produt.preco;

const result = carrinho.map(texj).map(value)

console.log(result)