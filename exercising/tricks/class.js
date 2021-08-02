
//criando uma classe e um construtor
class Lancamento{
    constructor (nome="Genérico", valor =0){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }

    //criando funcao para adc lancamentos, um ou mais com operador ...
    addLancamentos(...lancamentos){
        //para o operador ... pega todos os parametros e concatena com um array
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumarios(){
        let valorConsolidado = 0

        //para cada um dos lancamentos vai somar com valor consolidado
        this.lancamentos.forEach(l =>{
                valorConsolidado += l.valor
        })
    }
}


const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6,2021)
contas.addLancamentos(salario,contaLuz)

console.log(contas.sumarios())