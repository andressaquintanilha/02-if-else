let year = 20
let human = true
let birthdayMonth = "Março"
let name1 = "Eloiza"
let name2 = "Rayssa"
let sobrenome1 = "Quintanilha"
let sobrenome2 = "Dias"

//Crie uma condição que exiba uma mensagem no console se a idade for maior que 18.
if (year >= 18) {
  console.log ("Parabens! Você já é maior de idade!")
}

//Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true.
if (year >= 18 && human == true) {
  console.log("Informações verificadas.")
} else {
  console.log("Informações infundads.")
}

//Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro.
if (birthdayMonth == "Janeiro" || birthdayMonth == "Dezembro") {
  console.log("Que legal, você faz aniversário em um dos principais meses de férias. Janeiro ou Fevereiro")
} else {
  console.log("Que pena, você não faz aniversário em um dos principais meses de férias.")
}

//Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R.
if (name1.substring(0,1) == "R") {
  console.log ("Seu nome começa com a letra R.")
}

if (name2.substring(0,1) == "R"){
  console.log ("Seu nome começa com a letra R.")
}

//Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E.
if (sobrenome1.length > 6 || name1.substring(0,1) == "E") {
  console.log("Opção 01: Legal, seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E.")
}

if (sobrenome1.length > 6 || name2.substring(0,1) == "E") {
  console.log("Opção 02: Legal, seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E.")
}

if (sobrenome2.length > 6 || name1.substring(0,1) == "E") {
  console.log("Opção 03: Legal, seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E.")
}

if (sobrenome2.length > 6 || name2.substring(0,1) == "E") {
  console.log("Opção 04: Legal, seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E.")
}