function ejercicio4(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let DNI = parseInt(prompt("Número de DNI"))
    let lDNI = prompt("Introduzca la letra de su DNI")

    if(DNI<0 || DNI>99999999){
        console.log("El número de DNI ingresado no es valido")
        while(true);
    }

    else {
        let resto = DNI % 23;
        let LetraCorrecta = letras[resto];

        if(LetraCorrecta !== lDNI){
            console.log("Letra introducida incorrecta")
        }
        else {
            console.log("el número y la letra de DNI son correctos.")
        }
    }
 }