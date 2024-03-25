function Produto(nome, preço, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: false
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preço: {
            enumerable: true,
            value: preço,
            writable: false,
            configurable: false
        }
    })
}


const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 5000
delete p1.estoque
console.log(p1)