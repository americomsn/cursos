var preco = prompt("Digite o preço")
var idade = prompt("Digite sua idade")

if (idade < 18) {
    console.log(`Você vai pagar apenas ${preco-preco*10%}`)
}

else (idade > 18) {
    console.log(`Você vai pagar ${preco}`)
}