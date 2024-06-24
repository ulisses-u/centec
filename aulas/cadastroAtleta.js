const nome = 'Ulisses'
let idade = 33

// Infantil 0 - 10
// Juvenil 11 - 18
// Adulto 19 - 60
// Master  61 - 99

if(idade > 0 && idade <= 10){ 
    console.log(`Bem vindo atleta ${nome} voce competirá em Infantil`)
    console.log('Bem vindo atleta' + nome + 'voce competirá em Infantil')
}
else if(idade >= 11 && idade <= 18){
    console.log('Bem vindo atleta' + nome + 'voce competirá em Juvenil')
}
else if(idade >= 19 && idade <= 60){
    console.log('Bem vindo atleta' + nome + 'voce competirá em Adulto')
}
else if(idade > 61){
    console.log('Bem vindo atleta' + nome + 'voce competirá em Master')
}