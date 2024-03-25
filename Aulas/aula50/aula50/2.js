const conta = function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        acumulador += numero
    }
    console.log(acumulador)
};
conta('+', 0, 20, 30, 40 ,50)