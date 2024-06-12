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

function baixaPagina(){
    const emCache = true

    if(emCache){
        return Promise.reject('Página em cache')
    } else{
        return esperaAi('Baixando página', 3000)
    }
}

baixaPagina()
    .then(valor => {
        console.log(valor)
    })
    .catch(e => console.log(e + ' Erro'))