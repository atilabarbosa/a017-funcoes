//Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.
function imprimaMsg (nome){
    console.log(`Olá ${nome}`)
}
imprimaMsg("Aila")

//Declare uma função que imprima a tabuada do 6. Chame esta função.

// let numero = 6
// function tabuada(numero){
//     for(i=1; i<=10; i++){
//         console.log(`${numero} x  ${i} = ${i*numero}`)
// }
//  return tabuada
// }
// tabuada(numero)

//Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
let numero = 6
let tabuada = (numero) => {
    for(i=1; i<=10; i++){
        console.log(`${numero} x  ${i} = ${i*numero}`)
}
 return tabuada
}
tabuada(numero)