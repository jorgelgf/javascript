
const aprovados = ['jorge','isabel','mamae','tunico']


//pega o valor e o indice do array 
aprovados.forEach((nome, id)=> console.log(`${++id}) ${nome}`))


//criando uma nova funçao para dentro do sistema
//callback vai ser a funcao chamada dentro do foreach
Array.prototype.forEach2 = function (callback){
for (let i = 0 ; i< this.length ; i++ ){
    callback(this[i],i,this)
}}