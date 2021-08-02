const people ={

    name: 'jorge',
    age: 16,
    adress:{
        road: 'Rua sei lá',
        number: 1000
    }
}
//operador de desestruturar, tirei name e age para fora da estrutura
const{name,age}=people    

console.log(name)

//desestruturar objeto dentro de outro
const {adress: {road,number}} = people

console.log(road,number)