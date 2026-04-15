function ejercicio3(){
    let numero1 = 5;
    let numero2 = 8;
    if(numero1<numero2) {
    console.log("El primer numero no es mayor que el segundo");
    }
    if(numero2>=0) {
    console.log("El segundo numero es positivo");
    }
    if(numero1<0 || numero1 !=0) {
    console.log("El primer numero es negativo o distinto de cero");
    }
    if(numero1++ <= numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
 }