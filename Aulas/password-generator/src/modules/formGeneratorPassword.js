import gera from './generator'

const result = document.querySelector('.result')
const amountCaracteres = document.querySelector('.amount-caracteres')
const chkUppercase = document.querySelector('.chk-uppercase')
const chkLowercase = document.querySelector('.chk-lowercase')
const number = document.querySelector('.chk-number')
const symbol = document.querySelector('.chk-symbol')
const btnGenerate = document.querySelector('.generate')


export default () => {
    btnGenerate.addEventListener('click', () => {
            result.innerHTML = generatePassword()    
    })
}   

function generatePassword(){
    const geraSenha = gera(
        amountCaracteres.value, 
        chkUppercase.checked, 
        chkLowercase.checked, 
        number.checked, 
        symbol.checked)
        
    if (geraSenha){
        result.classList.remove('msg-error')
        result.classList.add('result')

        return geraSenha
    } else {
        result.classList.remove('result')
        result.classList.add('msg-error')
        
         return result.innerHTML = 'Nada selecionado'
    }
}

    
