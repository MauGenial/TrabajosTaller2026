function ejercicio6(){
    let numero = parseInt(prompt("Introduzca un número entero"))
    if (isNaN(numero)) {
        console.log("No se ingreso ningún número")
        }
    else {
        let resto = numero % 2 

        if (resto == 0){
        console.log("El número ingresado es par.")
        }
        else {
        console.log("El número ingresado es impar")
        }
    }

}