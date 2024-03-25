function Produto(nome, preço, estoque){
    this.nome = nome
    this.preço = preço

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError ('Só vale NUMERO bobão')
            }

            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 5000
console.log(p1.estoque)