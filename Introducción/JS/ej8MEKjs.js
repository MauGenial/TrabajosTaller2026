function ejercicio8() {
    let palin = prompt("Escriba un palindromo");
    let str = palin.replaceAll(" ","").toLowerCase();
    let inverStr = str.split("").reverse().join("");

    if (!isNaN(palin) || palin == null || palin == " "){
        console.log("Valor no valido.")
        while(true);
    }

    if (str == inverStr) {  
        console.log("En efecto, es un palindromo");
    }
    else{
        console.log("Mentiroso... no e un palindromo eso");
    }
}
