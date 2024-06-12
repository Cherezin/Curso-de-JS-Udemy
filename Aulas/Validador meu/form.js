class ValidaForm{
    constructor(){
        this.form = document.querySelector('.form')
        this.evento()
    }

    evento(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e){
        e.preventDefault()

        const checkField = this.checkInput()
        const checkPass = this.checkRpassword()

        if(checkField && checkPass){
            alert('Formulário enviado.')
            this.form.submit()
        }
    }

    checkRpassword(){
        let valid = true

        const senha = this.form.querySelector('.password')
        const rsenha = this.form.querySelector('.rpassword')

        if(senha.value !== rsenha.value){
            this.createError(senha, 'As senhas devem ser iguais')
            this.createError(rsenha, 'As senhas devem ser iguais')

            valid = false
        }

        return valid
    }

    checkInput(){
        let valid = true

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
          }

        for(let field of this.form.querySelectorAll('.valid')){
            const label = field.previousElementSibling.innerHTML

            if(!field.value){
                this.createError(field, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            if(field.classList.contains('CPF')){
                if(!this.validCPF(field)) valid = false
            }

            if(field.classList.contains('user')){
                if(!this.checkUser(field)) valid = false
            }

            if(field.classList.contains('password')){
                if(!this.checkPassword(field)) valid = false
            }
        }

        return valid
    }

    checkPassword(field){
        let valid = true
        const password = field.value

        if(password.length > 12 || password.length < 6){
            this.createError(field, 'Senha deve ter de 6 a 12 caracteres.')
            valid = false
        }

        return valid
    }
    
    checkUser(field){
        let valid = true
        const user = field.value

        if(user.length > 12 || user.length < 3){    
            this.createError(field, 'Usuário deve ter de 3 a 12 caracteres.')
            valid = false
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Nome de usuário deve conter apenas letras e/ou números')
            valid = false
        }
        
        return valid
    }

    validCPF(field){
        const cpf = new ValidaCPF(field.value)

        if(!cpf.valida()){
            this.createError(field, 'CPF inválido.')

            return false
        }

        return true
    }

    createError(field, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }
}

const form = new ValidaForm()