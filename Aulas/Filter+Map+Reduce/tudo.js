//Retorne o dobro dos pares
//-> Filtre os pares
//-> Dobre os valores
//-> Soma todos

const numeros =  [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


const filtro = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador}, 0)

console.log(filtro)