alert("Desafio de Lógica - Implementação de uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado")
let valor = prompt("Por Favor, digite um número inteiro positivo para que a função seja aplicada:")

n=parseInt(valor)
soma=0
for(i=1;i<n;i++){
    if(i%3==0 | i%5==0){        
        soma+=i
    }
}

alert(`O resultado do somatório é ${soma} `)
