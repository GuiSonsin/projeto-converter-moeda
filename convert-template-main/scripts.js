const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const form = document.querySelector("form")

// Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Capturando o evento de submit do formulario
form.onsubmit = (event) => {
    // Desativa o recarrecamento automatico da pagina
    event.preventDefault()
    console.log(currency.value)
}