#Ejercicio 1
# Escribir una función que pida un número entero entre 1 y 10 y
# guarde en un fichero con el nombre tabla-n.txt la tabla de
# multiplicar de ese número, donde n es el número introducido.

def tablaMultiplicarNumero():
    n = int(input("Ingresa un número entero de 1 a 10 👍"))
    if 1 <= n <= 10:
        nombreFichero = f"tabla-{n}.txt"
        with open(nombreFichero, "w", encoding="utf-8") as f:
            for i in range(1,11):
                f.write(f"{n}x{i} = {n * i}\n") 
            print(f"multiplicaciones del numero")
    else:
        print("El numero tiene que estar en el rango permitido.")