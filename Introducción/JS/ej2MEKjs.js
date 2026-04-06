function ejercicio2(){
    let valores = [true, 5, false, "hola", "adios", 2];
    if(valores[3]>valores[4]){
        console.log("El elemento de texto mayor es ", valores[3])
    }
    else if(valores[3]<valores[4]){
        console.log("El elemento de texto mayor es ", valores[4])
    }

    valorVerdadero = valores[0] || valores[2]
    valorFalso = valores[0] && valores[2]
    console.log(valorVerdadero)
    consele.log(valorFalso)

    console.log(valores[1]+valores[5])
    console.log(valores[1]-valores[5])
    console.log(valores[1]*valores[5])
    console.log(valores[1]/valores[5])
    console.log(valores[1]**valores[5])
    
}