function Calculadora(){
        this.display = document.querySelector('.display')

        this.inicia = () => this.clique()

        this.clearButton = () => this.display.value = ''

        this.deleteOne = () => this.display.value = this.display.value.slice(0, -1)

        this.realizaConta = () =>{
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
            } catch(e){
                alert('Conta inválida')
                this.clearButton()
                return
            }
        },

        this.clique = () => {
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

        this.btnParaDisplay = (valor) => this.display.value += valor
    }

const calculadora = new Calculadora()
calculadora.inicia()
