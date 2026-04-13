function ejercicio5() {
   let numero = parseInt(prompt("Introduzca un número entero a factorizar"))
   let resultado = 1;

   if (isNaN(numero) || numero == null || numero == " "){
        console.log("Valor no valido.")
        while(true);
   }
   
   for (var i = 1; i <= numero; i++) {
      resultado = resultado * i;
   }
   console.log("factorial del numero :", resultado)
}
