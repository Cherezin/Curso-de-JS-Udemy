class Pessoa{
    constructor(nome, sobremone){
        this.nome = nome
        this.sobremone = sobremone
    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa('Alexandre', 'Nascimento')
console.log(p1.falar())