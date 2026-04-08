function ejercicio10() {
    let valores = [0,0,0,0,0,0,0,0,0,0,0];

    for(var i = 0; i <= 36000; i++) {
        let dado1 = Math.floor(Math.random() *  6) + 1;
        let dado2 = Math.floor(Math.random() *  6) + 1;
  
        let sumadados = dado1 + dado2;
        valores[sumadados] = valores[sumadados] + 1
    }

    for(var i = 0; i <= 10; i++) {
        console.log("El numero ", i+2," salio: ", valores[i],"veces durante las tiradas");
    }
}
