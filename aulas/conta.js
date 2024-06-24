class Conta{
    constructor(titular, numero, banco, saldo){
        this.titular = titular
        this.numero = numero
        this.banco = banco
        this.saldo = saldo
    }

    get saldoDaConta() {
        return this.saldo
    }

    get titularDaConta() {
        return this.titular
    }

    get numeroDaConta() {
        return this.numero
    }

    get bancoDaConta() {
        return this.banco
    }

    set depositoEmConta(valorDeDeposito){
        this.saldo += valorDeDeposito  //incremento
    }

    set saqueEmConta(valorDeSaque){
        this.saldo -= valorDeSaque     // decremento
    }
}
     
let conta01 = new Conta("Raony", "1234", "Bradesco", 1000)

conta01.saqueEmConta = 500

conta01.depositoEmConta = 1000


function saudacao(cliente, valorDoSaldo){
    console.log('Olá senhor ' + cliente + ', seu saldo é: ' + valorDoSaldo)
}

saudacao(conta01.titularDaConta,conta01.saldoDaConta)

