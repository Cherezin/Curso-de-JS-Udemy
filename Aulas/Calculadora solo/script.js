function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.clique()
        },

        clearButton(){
            this.display.value = ''
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta(){
            let conta = this.display.value

            conta = eval(conta)

            try{
                if(!conta){
                    alert('Conta inválida')
                    this.clearButton()
                    return
                } else {
                    this.display.value = String(conta)
                }
            } catch{
                alert('Conta inválida')
                this.clearButton()
                return
            }
        },

        clique(){
            document.addEventListener('click', (e) => {
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearButton()
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }) 
        },

        btnParaDisplay(valor){
            this.display.value += valor
        }
    }

}

const calculadora = criaCalculadora()
calculadora.inicia()
