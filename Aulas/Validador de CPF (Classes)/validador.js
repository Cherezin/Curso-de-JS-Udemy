class ValidaCPF{
    constructor(cpfEnviado){
        this._cpfEnviado = cpfEnviado
    }

    get cpfLimpo(){
        return this._cpfEnviado.replace(/\D+/g, '')
    }

    set cpfLimpo(novoCpf){
        const cpfLimpo = novoCpf ? novoCpf.replace(/\D+/g, '') : '';
        if(cpfLimpo.length !== 11) return false;
        this._cpfEnviado = cpfLimpo
    }


    valida(){
        if(this.isSequencia()) return false;

        const cpfParci = this.cpfLimpo.slice(0, -2)
        const dig1 = this.criaDigito(cpfParci)
        const dig2 = this.criaDigito(cpfParci + dig1)

        const cpfFinal = cpfParci + dig1 + dig2
        return cpfFinal === this.cpfLimpo
    }
    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial)
        let regressivo = cpfArray.length + 1;
        const total = cpfArray.reduce((ac, val) =>{
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }


    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

const cpf = new ValidaCPF('185.438.697-22')
if(cpf.valida()){
    console.log('Cpf Válido')
} else{
    console.log('Cpf Inválido')
}