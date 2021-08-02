
//objeto
const student = [
{name: 'Jorge', note: 9},
{name: 'Isabel', note: 10},
{name: 'Mae', note: 5.8},
{name: 'Tonico', note: 7.8}]

const notes = stuNote => stuNote.note
//usando reduce, para somar o total de notas
//usando reduce ele esta pegando o return jogando o valor dentro do primeiro paramentro e o current está
//pegando cada indice
const result = student.map(notes).reduce(function (acumulator,current) {
    return acumulator+current
})


console.log(result);
console.log();
console.log(5.8+9+10+7.8)