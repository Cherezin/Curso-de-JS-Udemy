function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo

    
}
Conta.prototype.sacar = function(valor){
    if(this.saldo >= valor){
        this.saldo -= valor
        this.verSaldo()
    } else {
        console.log(`Saldo insuficiente`)
        
        this.verSaldo()
        return
    }
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
   console.log(`Saldo:  R$ ${this.saldo}`)
}

const conta1 = new Conta (4220, 87654321, 1300)

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype.sacar = function(valor){
    if(this.saldo + this.limite >= valor){
        this.saldo -= valor
        this.verSaldo()
    } else {
        console.log(`Saldo insuficiente`)
        
        this.verSaldo()
        return
    }
}

const cc = new ContaCorrente(4002, 12345678, 0, 100)
//cc.depositar(10)
//cc.sacar(100)

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const cp = new ContaPoupança(4000, 14785236, 0)
cp.depositar(10)
cp.sacar(20)
cp.sacar(2)
