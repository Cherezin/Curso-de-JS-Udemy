function Produto (nome, preço){
    this.nome = nome
    this.preço = preço
}

Produto.prototype.desconto = function(percentual){
    this.preço = this.preço - (this.preço * (percentual/100))
}
Produto.prototype.aumento = function(percentual){
    this.preço = this.preço + (this.preço * (percentual/100))
}
const p1 = new Produto ('sabonete', 10)
//p1.desconto(10)
//p1.aumento(10)
console.log(p1)