//vista por todo o arquivo. Mais antiga e menos usada
var variavel1 = "Olá" 

//se declarada *dentro* da funcao será vista apenas na funcao
let variavel2 = 3     

//escopo global. Ela nao muda
const variavel3 = 8

//concatenação
console.log(variavel1, "Turminha do", variavel2+ "º ano")
console.log(variavel2 + variavel3)

//Tipos de variaveis
console.log(typeof variavel1)
console.log(typeof variavel2)
console.log(typeof variavel3)


//Formato JSON - JavaScript Notation Object
const obj = {
    nome: "Joao",
    signo: "Escorpiao"
}
console.log(obj)
console.log(typeof obj)

//Puxar uma parte especifica do obj
console.log(obj.nome)
console.log(obj.signo)
