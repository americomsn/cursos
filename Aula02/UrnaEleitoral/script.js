var idade = prompt("Digite sua idade")

if (idade >= 16 && idade < 18) {
    console.log("Você pode votar!")
}

else if (idade >= 18 && idade < 65) {
    console.log ("Você precisa votar!")
}

else if (idade >= 65) {
    console.log ("Você pode votar")
}

else {
    console.log("Você não pode votar!")
}

