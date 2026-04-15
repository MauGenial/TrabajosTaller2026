function ejercicio7() {
    let texto = prompt("Escriba un texto");

    if (!isNaN(texto) || texto == null || texto == " "){
        console.log("Valor no valido.")
    }

    else if (texto === texto.toLowerCase()) {
        console.log("El texto que escribio contiene solo minusculas");
    }
    else if(texto === texto.toUpperCase()){
        console.log("El texto que escribio contiene solo mayusculas");
    }
    else {
        console.log("El texto que escribio contiene tanto mayusculas como minusculas");
    }
    
}
