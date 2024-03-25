// Função cosntrutora ->(retorna) objetos
// Função fábrica -> objetos

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p1 = new Pessoa ('Luiz', 'Otávio')
const p2 = new Pessoa ('Maria', 'Luiza')

console.log(p1.nome)
console.log(p2.nome)
