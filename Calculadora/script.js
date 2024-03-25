function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btnc-clear'),
        
        inicia(){
            this.clique()
            this.pressionaEnter()
        },

        clearDisplay() {
           this.display.value = '' 
        },

        deleteOne() {
           this.display.value = this.display.value.slice(0, 1) 
        },

        realizaConta() {
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida!')
                    this.clearDisplay()
                    return
                } else {
                    this.display.value = String(conta)
                }

            } catch (e){
                    alert('Conta inválida!')
                    this.clearDisplay()
                    return
            }
        },

        clique(){
            document.addEventListener('click', (e) => {
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                } 
                if (el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if (el.classList.contains('btn-del')){
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