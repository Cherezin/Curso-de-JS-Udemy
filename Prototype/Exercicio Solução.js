function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParci = this.cpfLimpo.slice(0, -2) 
    const dig1 = this.criaDigito(cpfParci)
    const dig2 = this.criaDigito(cpfParci + dig1)

    const novoCpf = cpfParci + dig1 + dig2
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)
		let regressivo = cpfArray.length + 1
		const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
		regressivo--
		return ac
	}, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52')
//console.log(cpf.valida());

if(cpf.valida()){
    console.log('Cpf Válido')
} else{
    console.log('Cpf Inválido')
}