function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable:true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }      
    });
}


ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParci = this.cpfLimpo.slice(0, -2) 
    const dig1 = this.criaDigito(cpfParci)
    const dig2 = this.criaDigito(cpfParci + dig1)
    //console.log(dig1)
    //console.log(dig2)

    const novoCpf = cpfParci + dig1 + dig2
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial)

    i = cpfArray.length + 1
    const multiplicação = cpfArray.map(function(valor){
       let resultado = valor * i
        i--
        return resultado
    })

    const somaTudo = multiplicação.reduce(function(acumulador, valor){
        acumulador += valor
        return acumulador
    }, 0)

    const dígito = 11 - (somaTudo % 11)
    return dígito > 9 ? '0' : String(dígito);
}

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};



const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());



