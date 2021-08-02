//cadeia de protótipos.
//filho herda pai e pai herda avô
const avo = { at1: 1}

const pai =  { __proto__:avo, at2:2}

const filho = {__proto__:pai, at3:3}

//se eu perguntar se filho tem at1 ele vai buscar no de cima até encontrar

console.log(filho.at1)


////Outra forma de criar chamados pai~filho

console.log('\n\n');

//criando objeto
const pp1 ={name: 'jorge', corCabelo: 'preto'}
//integrando o objeto ff1 pra dentro de pp1 
const ff1 = Object.create(pp1);
ff1.name='bia'

console.log(ff1.name)
//criando um novo objeto filho contendo mais parâmetros dentro do novo filho

const ff2 = Object.create(pp1, {
                nome:{
                //OBJETO filho, bia, podendo ser escrito e visível
                //definindo valor
                value: 'lua', 
                //habilitando escrita
                Writable: false, //nao deixa mudar o valor
                //visibilidade
                Enumerator: true
            }
})

console.log(ff2.nome)

//pequena verificação se a propridade pertence ou não ao objeto pesquisado
//verificando se o objeto herda algo
for (const key in ff2){
    ff2.hasOwnProperty(key)? console.log(key) : console.log(`Por herança: ${key}`)

}
