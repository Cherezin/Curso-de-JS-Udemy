class Calculadora{
    constructor(){
        this.display = document.querySelector('.display')
        this.inicia()
    }

    inicia(){
        this.click()
    }

    click(){
        document.addEventListener('click', e =>{
            const el = e.target

            if(el.classList.contains('btn-num')){
                this.btnDisplay(el.innerText)
            }
            if(el.classList.contains('btn-clear')){
                this.btnClear()
            }
            if(el.classList.contains('btn-del')){
                this.btnDel()
            }
            if(el.classList.contains('btn-eq')){
                this.btnEq()
            }
        })
    }

    btnDisplay(valor){
        this.display.value += valor
    }

    btnClear(){
        this.display.value = ''
    }

    btnDel(){
        this.display.value = this.display.value.slice(0, -1)
    }

    btnEq(){
        let conta = this.display.value
        
        try{
            if(/[^0-9+\-*/().]/.test(conta)) {
                throw new Error('Conta Inválida');
            }
            
            conta = eval(conta)

            if(!conta && conta !== 0){
                throw new Error('Conta Inválida');
            }

            this.display.value = String(conta)
        }catch(e){
            alert('Conta inválida.')
            this.btnClear()
            return
        }
    }
}

const calc = new Calculadora