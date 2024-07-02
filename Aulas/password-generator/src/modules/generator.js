const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const upper = () => String.fromCharCode(rand(65, 91))
const lower = () => String.fromCharCode(rand(97, 122))
const num = () => String.fromCharCode(rand(48, 57))
const symbols = '!@#$%¨&*(){}[]_+-=/:><^~;?'
const simb = () => symbols[rand(0, symbols.length)]

export default function gera(amount, uppercase, lowercase, number, symbol){
    const passGenerated = []
    amount = Number(amount)

    for(let i = 0; i < amount ; i++){
        uppercase && passGenerated.push(upper())
        lowercase && passGenerated.push(lower())
        number && passGenerated.push(num())
        symbol && passGenerated.push(simb())
    }
    
    return passGenerated.join('').slice(0, amount)
}


