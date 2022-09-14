//Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
let num1 = Number(prompt("digite um numero"))
let num2 = Number(prompt("digite outro numero"))

function soma(num1, num2){
    return num1+num2
}
console.log(soma(num1,num2))

function subtracao(num1, num2){
    return num1-num2
}
console.log(subtracao(num1,num2))

function multip(num1, num2){
    return num1*num2
}
console.log(multip(num1,num2))

function divisao(num1, num2){
    return num1/num2
}
console.log(divisao(num1,num2))