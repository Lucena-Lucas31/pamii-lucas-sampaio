//Cabeçalho do programa
console.log("========================= CALCULADORA =========================")

//Declaracao das variaveis
let num1 = 10
let num2 = 5
let line = "==============================================================="

//Apresentação dos números
console.log("Os números trabalhados serão", num1, "e", num2)
console.log(line)


//Criando funcao para soma
console.log("SOMA: ")
function sum() {
    return num1 + num2
}
console.log("A soma dos valores", num1, "e", num2, "resulta em:", sum())
console.log(line)

//Criando funcao para substrair
console.log("SUBTRAÇÃO: ")
function subt(){
    return num1 - num2
}
console.log("A subtração dos valores", num1, "e", num2, "resulta em:", subt())
console.log(line)

//Criando funcao para multiplicar
console.log("MULTIPLICAÇÃO: ")
function mult(){
    return num1 * num2
}
console.log("A multiplicação dos valores", num1, "e", num2, "resulta em:", mult())
console.log(line)

//Criando funcao para dividir
console.log("DIVISÃO: ")
function division(){
    return num1 / num2
}
console.log("A divisão dos valores", num1, "e", num2, "resulta em:", division())
console.log(line)

//Criando funcao para potenciação
console.log("POTENCIAÇÃO: ")
function pot(){    
let result = {
    pt1: num1 * num1,
    pt2: num2 * num2
}
    return result
}

console.log("A potenciação dos valores", num1, "e", num2, "são, respectivamente:", pot().pt1, "e", pot().pt2)
console.log(line)


//Criando funcao para radiciação
console.log("RADICIAÇÃO: ")
function rad(){    
let result = {
    rad1: Math.sqrt(num1),
    rad2: Math.sqrt(num2)
}
    return result
}

console.log("A raiz dos valores", num1, "e", num2, "são, respectivamente:\n"+ rad().rad1, "e", rad().rad2)
console.log(line)



