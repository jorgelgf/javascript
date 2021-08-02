const comp = a =>{
    let result = "booleano ou número esperados, mas o parâmetro é do tipo string"

    if (typeof(a)===typeof(1)){ result = a*-1} if(typeof(a)===typeof(true)){result = !a} 

    return result;
}

console.log(comp('jorge'))
