function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') return reject('INVALID VALUE')

        setTimeout(() => {resolve(msg + ' Passei na promisse')}, tempo)
    })
}

/*esperaAi('Frase 1', rand(1, 3))
.then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 3', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
})
.catch(e => {
    console.log('ERRO:', e)
})*/


//Promise.all, Promise.race, Promise.resolve, Promise.reject

const promise = [
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
];


//PROMISE ALL

/*Promise.all(promise).then(valor => {
    console.log(valor)
}).catch(e => {
    console.log(e + ' Não passei na promisse')
})*/

//PROMISSE RACE

Promise.race(promise).then(valor => {
    console.log(valor)
}).catch(e => {
    console.log(e + ' Não passei na promisse')
})