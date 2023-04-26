let num1 = 2
const num2 = 3

//Criando uma funcao
function soma() {
    return num1 + num2
}
console.log(soma())

/*
num1 = 6
num2 = 9 #Nao pode mudar a const
console.log(soma())
*/

//Usando funcao para usar const de forma variavel
const FuncaoSoma = (a, b) => {
    return a + b
}

console.log(FuncaoSoma(10, 8))
console.log(FuncaoSoma(7, 30))