//1 desafio, os alunos são bolsistas?
//2 desafio, algum é bolsista?


//objeto
const student = [
    {name: 'Jorge', note: 9, bols: true},
    {name: 'Isabel', note: 10, bols: true},
    {name: 'Mae', note: 5.8, bols: false},
    {name: 'Tonico', note: 7.8, bols: false}]


    //todos sao bolsistas?
    const bolsista = alunos => alunos.bols;
    const todosAlunos = (resultado, bolsista) => resultado&&bolsista;
    
    console.log(student.map(bolsista).reduce(todosAlunos));



    //algum aluno é bolsista?
    const someoneB = bolsi =>bolsi.bols;
    const someBolsVal = (results, bolsis) => results || bolsis

    console.log(student.map(someoneB).reduce(someBolsVal));