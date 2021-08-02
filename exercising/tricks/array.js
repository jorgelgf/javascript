let aprovados = ['jorge','isabel','tunico','mamae']

console.log(aprovados[0])

//adcionar final array

aprovados.push('mae')
console.log(aprovados[aprovados.length -1])

//por em ordem 
aprovados.sort()
console.log('\n',aprovados)

//p incluir, excluir usa o splice
//le-se do indice 0 e deleta dois elementos começando do indice (primeiro valor)
aprovados.splice(1,1)
console.log('\n',aprovados)

//para acrescentar usa valores com ''
//para este caso foi adc no indice 1 apenas um elemento
aprovados.splice(1,1,'sucesso','feliz')
console.log('\n',aprovados)

aprovados.push()//adc no ultimo elemento
aprovados.pop()//remove o ultimo elemento
aprovados.shift()//tira valor da primeira posicao
aprovados.unshift('lua') //adc na primeira posicao
 

//slice pega um pedaco do array
//abaixo pega o indice 1 ate o 3
const pedaco=aprovados.slice(1,3)

