var peso = prompt("Digite sue peso")
var altura = prompt("Digite sua altura")

var imc
imc = peso / altura ** altura


if (imc < 16) {
    console.log("Mragreza Grave")
}

else if (imc >= 16 && imc <= 16,9) {
    console.log ("Magreza Moderada")
}

else if (imc >= 17 && imc <= 18,5) {
    console.log ("Magreza Leve")
}

else if (imc >= 18,6 && imc <= 24,9) {
    console.log ("Peso Ideal")
}

else if (imc >= 25 && imc <= 29,9) {
    console.log ("Sobre Peso")
}

else if (imc >= 30) {
    console.log ("Obeso")
}