function ejercicio7() {
    let texto = prompt("Escriba un texto");

    if (!isNaN(texto)) {
        console.log("El texto contiene numeros.")
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
