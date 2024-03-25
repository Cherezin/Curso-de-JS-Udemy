function mostrarHora (){
    let data = new Date()

    return data.toLocaleString('pt-BR', {hour12: false})
}

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000)

setTimeout(function(){
    clearInterval(timer)
}, 5000)

setTimeout(function(){
    console.log('Olá mundo!')
}, 5000)