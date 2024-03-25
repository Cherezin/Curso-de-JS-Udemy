function Produto(nome, preço){
    this.nome = nome
    this.preço = preço
}

Produto.prototype.aumento = function(quantia){
    this.preço += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preço -= quantia
}

function Camiseta(nome, preço, cor){
    Produto.call(this, nome, preço)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preço, material){
    Produto.call(this, nome, preço)
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca


const camiseta = new Camiseta('Regata', 5, 'Preta')
const caneca = new Caneca ('Cenequinha', 3, 'Porcelana')

caneca.aumento(5)
console.log(caneca)

camiseta.aumento(10)
console.log(camiseta)
