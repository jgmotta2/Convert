const USD = 6.02
const GBP = 7.6
const EUR = 6.32

/* Obtendo os elementos do formulário */
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("footer")
const description = document.getElementById("description")

/* Manipulando o input amount para receber apenas números */
amount.addEventListener("input", function () {
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
  try {
    /* exibindo a cotação da moeda selecionada. 
    if (currency.value == "USD" || currency.value == "GBP") {
      description.textContent = `${symbol} 1 = ${price}`
    } else {
      description.textContent = ` 1${symbol} = ${price}`
    }*/
    currency.value == "USD" || currency.value == "GBP"
      ? (description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`)
      : (description.textContent = `1${symbol} = ${formatCurrencyBRL(price)}`)

    /* Aplica a classe que exibe o footer para mostrar o resultado */
    footer.classList.add("show-result")
  } catch (error) {
    /* Remove a classe do footer, ocultando ele */
    footer.classList.remove("show-result")
    alert("Algo deu errado, tente novamente!")
  }
}

/* formata a moeda em real brasileiro */
function formatCurrencyBRL(value) {
  /* o "Number" converte pra número para utilizar o toLocaleString para formatar no padrão BRL.*/
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
