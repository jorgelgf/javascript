
function erroTime(e){
    //pode ser saída de erro do nome;
    //pode ser erro de número;
    //objeto;
    //Lançando erro abaixo
    throw 'Erro';
}

function impNameScream (obj){
    //testa o caso
    try{
        console.log(obj.name.toUpperCase() + ' !!!!');


        //se der erro faz o catch
    } catch(e){
        
        //chamar uma função para mostrar erro
        console.log(`Erro causado\n ${e}\n`)
     
        erroTime(e)

        //finally é execultado independente se der erro ou ñ
    }finally{
        console.log('End.')
    }
}

//criando um obj com parâmetro diferente da requisição da função

const obj = {
nome: 'Jorge'
}

impNameScream(obj);