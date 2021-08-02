//criando uma função que é vista como uma classe

function Carro (maxSpeed = 200, delt = 5 ){
        //objeto privado
        //usado apenas dentro da função
        let speedCurrent = 0;

    //criando um objeto público:
    //this permite usar fora da função
    this.aceleration = function (){
        // criando condição para que velocidade atual nao supere a max
        if (speedCurrent < maxSpeed){
            speedCurrent += delt;
        }else{
            speedCurrent = maxSpeed
        }
    }
    //obtendo valor dentro da estrutura 
    this.getAceleration = function(){
        return speedCurrent;
    }
}

//criando objeto uno
const uno = new Carro  ;

//imprimindo velocidade atual

console.log(uno.getAceleration())
//acelerando
uno.aceleration();
console.log(uno.getAceleration())


//recebendo outro caro

const ferrari  = new Carro (350, 20)



//this é para público
//let e const é para privado