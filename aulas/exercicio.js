// primeiro passo, declarando variaveis
let nota01 = 8;
let nota02 = 3;
let nota03 = 7;
let nota04 = 10;
let media
const nome_aluno = 'Ulisses'

// segundo passo, realizando calculos
media = (nota01 + nota02 + nota03 + nota04) / 4

// terceiro passo, mostrando no terminal
if(media >= 7){
    console.log('Olá '+ nome_aluno +'Você foi  APROVADO com média final igual a '+ media)
} else {
    console.log('Olá '+ nome_aluno +'Você foi REPROVADO com média final igual a '+ media)
}