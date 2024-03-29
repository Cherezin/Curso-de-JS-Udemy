class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já desligado')
            return
        }
        this.ligado = false
    }
}

class Celular extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        
        this.cor = cor
        this.modelo = modelo
    }
}

const c1 = new Celular ('Iphone', 'Branco', 'Iphone 12')
console.log(c1)