/* Obtendo os elementos do formulário */
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

/* Manipulando o input amount para receber apenas números */
amount.addEventListener("input", function (event) {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

/* Capturando o evento de submit do forumlário */
form.onsubmit = function (event) {
  event.preventDefault()
  console.log(currency.value)
}
