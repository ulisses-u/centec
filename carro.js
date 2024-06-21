class Carro{
    constructor(marca, modelo, cor, medidorCombustivel, velocidade){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.medidorCombustivel = medidorCombustivel
        this.velocidade = velocidade
    }

    acelerar(){
        this.velocidade += 10  // this.velocidade = velocidade + 10
        this.medidorCombustivel -= 10
    }

    freiar(){
        this.velocidade -= 10
    }
}

let unoDeEscada = new Carro

unoDeEscada.marca = 'Fiat'
unoDeEscada.modelo = 'Uno'
unoDeEscada.cor = 'Vermelho'
unoDeEscada.medidorCombustivel = 100
unoDeEscada.velocidade = 0

unoDeEscada.acelerar()
unoDeEscada.acelerar()
unoDeEscada.acelerar()
unoDeEscada.acelerar()

let renegade = new Carro('Jeep','renegade','azul',100,0)
renegade.acelerar()
renegade.freiar()

console.log(renegade)

//console.log(unoDeEscada)