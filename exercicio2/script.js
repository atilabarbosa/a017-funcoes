//Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
function soma (num1, num2){
    return num1 + num2
}
console.log(soma(5,4))

//Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function booleano (num3, num4){
    return num3>=num4
}
console.log(booleano(7,9))

//Uma função que receba um número e imprima se ele é par ou não
function par(num5){
    if (num5 %2 === 0){
        console.log("o numero é par")
    }else{
        console.log("o numero é impar")
    }
}
par(3)

//Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas
let texto = "mensagem de teste"
function string(mensagem){
    return ` ${mensagem.length}, ${mensagem.toUpperCase()}`
}
console.log(string(texto))
