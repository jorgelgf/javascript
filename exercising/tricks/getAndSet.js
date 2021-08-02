//criando um objeto
const teste = {
    _valor: 1,  //por convenção, é uma variável que se pretende usar como interna a função
                //Possuindo caracteristicas de privada

    //usando o mesmo nome de função com métodos diferentes (js só entende pra esse processo)
    get valor (){return this._valor++},
    set valor (valor){ 
       if (valor > this._valor)  
        this._valor = valor}
}

teste.valor=10;
console.log(teste.valor, teste.valor)