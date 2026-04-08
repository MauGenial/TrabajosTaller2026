function ejercicio5() {
   let numero = parseInt(prompt("Introduzca un número entero a factorizar"))
   let resultado = 1;
   for (var i = 1; i <= numero; i++) {
      resultado = resultado * i;
   }
   console.log("factorial del numero :", resultado)
}
