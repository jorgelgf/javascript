
//maps ele cria um array novo com valores diferentes.
//map nao transforma o array atual, apenas transforma.

const a = [1,2,3,4]
console.log(a)

let resultado = a.map(function (e){
    return e*2
})

const mult = a.map(e=>e*10)
const adc = a.map(e=> ++e)

const real = a.map(e=>`R$ ${parseFloat(e).toFixed(2).replace('.',',')}`)

console.log(real)