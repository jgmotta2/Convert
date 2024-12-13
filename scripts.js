const USD = 6.02
const GBP = 7.6
const EUR = 6.32

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

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

/* Função para converter a moeda */
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}
