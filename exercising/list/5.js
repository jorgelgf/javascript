const month = monthNumber => {
    let mes = 'sem valor';
    if(monthNumber>12 || monthNumber<1){
        console.log('favor inserir valor correto ');
    }else{
        switch (monthNumber) {
            case 1: mes='janeiro' 
                
                break;

            case 2: mes ='fevereiro'
        
            default:
                break;
        }
    }return mes;

}

console.log(month(0));