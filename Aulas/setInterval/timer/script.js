function createSeconds(seconds){
    const date = new Date(seconds * 1000)
    return date.toLocaleTimeString('pt-BR', 
    {hour12: false, timeZone: 'UTC'})
}

let segundos = 0
let timer = document.querySelector('.timer')
let tell;
function start(){
    clearInterval(tell)
    timer.classList.remove('paused')
    tell = setInterval(function(){
        segundos++
        timer.innerHTML = createSeconds(segundos)
    }, 1000)
}
function pause(){
    timer.classList.add('paused')
    clearInterval(tell)
}
function restart(){
    clearInterval(tell)
    timer.classList.remove('paused')
    timer.innerHTML = '00:00:00'
    segundos = 0
    tell = setInterval(function(){
        segundos++
        timer.innerHTML = createSeconds(segundos)
    }, 1000)
}
function reset(){
    clearInterval(tell)
    timer.classList.remove('paused')
    timer.innerHTML = '00:00:00'
    segundos = 0
}
