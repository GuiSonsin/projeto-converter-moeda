const amount = document.getElementById("amount")

// Manipulando o input amount para receber apenas numeros
amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/
    amount.value = amount.value.replace(hasCaractersRegex, "")
})