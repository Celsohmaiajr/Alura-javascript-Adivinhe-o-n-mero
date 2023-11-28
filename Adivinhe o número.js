var numeroSecreto = parseInt(Math.random() * 1001)

while (chute != numeroSecreto){
var chute = prompt('insira um número entre 1 e 1000')

if (chute == numeroSecreto){
  alert ('Acertou!')
} else if (chute > numeroSecreto){
  alert ('O número secreto é Menor')
} else if (chute < numeroSecreto){
  alert ('o número secreto é Maior')
}
}