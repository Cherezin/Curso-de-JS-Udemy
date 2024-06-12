class ValidaFormulario{
    constructor(){
        this.form = document.querySelector('.form')
        this.eventos();
    }

    eventos(){
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e){
        e.preventDefault()
        const checaCampos = this.checkBox()
        const checaSenhas = this.repeatPassword()

        if(checaCampos && checaSenhas){
            alert('Formulário enviado.')
            this.form.submit();
        }
    }

    repeatPassword(){
        let valid= true

        const senha = this.form.querySelector('.senha')
        const rsenha = this.form.querySelector('.rsenha')

        if(senha.value !== rsenha.value){
            valid = false

            this.createError(senha, 'As senhas devem ser iguais')
            this.createError(rsenha, 'As senhas devem ser iguais')
        }

        return valid;
    }

    checkBox(){
        let valid = true

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
          }
      

        for(let box of this.form.querySelectorAll('.valida')){
            const label = box.previousElementSibling.innerHTML

            if(!box.value){
                this.createError(box, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(box.classList.contains('cpf')){
                if(!this.validaCPF(box)) valid = false 
            }

            if(box.classList.contains('usuario')){
                if(!this.userCheck(box)) valid = false
            }

            if(box.classList.contains('senha')){
                if(!this.passwordCheck(box)) valid = false
            }
        }

        return valid;

    }


    validaCPF(box){
        const cpf = new ValidaCPF(box.value)

        if(!cpf.valida()){
            this.createError(box, 'CPF inválido.')
            return false
        }

        return true
    }

    
    userCheck(box){
        const user = box.value
        let valid = true

        if(user.length > 12 || user.length < 3){
            this.createError(box, 'Usuário deve ter entre 3 a 12 caracteres.')
            valid = false
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(box, 'Nome de usuário deve conter apenas letras e/ou números')
            valid = false
        }

        return valid
    }


    passwordCheck(box){
        const password = box.value
        let valid = true
        
        if(password.length > 12 || password.length < 6){
            this.createError(box, 'A senha deve ter de 6 a 12 caracteres.')
        }

        return valid
    }



    createError(box, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        box.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();