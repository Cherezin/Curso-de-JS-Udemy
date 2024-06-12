function calcular(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.clique()
        },

        btnDel(){
            this.display.value = this.display.value.slice(0, -1)
        },

        btnClear(){
            this.display.value = ''
        },

        realizaConta(){
            let conta = this.display.value

            conta = eval(conta)
            try{
                if(!conta){
                    alert('Conta Inválida')
                    this.btnClear()
                    return
                }else{
                    this.display.value = String(conta)
                }
            }catch{
                alert('Conta Inválida')
                this.btnClear()
                return
            }
        },

        clique(){
            document.addEventListener('click', e => {
                const el = e.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.btnClear()
                }
                if(el.classList.contains('btn-delet')){
                    this.btnDel()
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

const iniciar = calcular()
iniciar.inicia()