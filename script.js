let year = 20
let human = true
let birthdayMonth = "Março"
let name = "Andressa"

if (year >= 18) {
  console.log ("Parabens! Você já é maior de idade!")
}

if (year >= 18 && human == true) {
  console.log("Informações verificadas.")
} else {
  console.log("Informações infundads.")
}

if (birthdayMonth == "Janeiro" || birthdayMonth == "Dezembro") {
  console.log("Que legal, você faz aniversário em um dos principais meses de férias. Janeiro ou Fevereiro")
} else {
  console.log("Que pena, você não faz aniversário em um dos principais meses de férias.")
}