#Ejercicio 3
# Escribir una función que pida dos números n y m entre 1 y 10, lea el fichero tabla-n.txt con la tabla de multiplicar de ese número, y muestre por pantalla la línea m del fichero. 
# Si el fichero no existe debe mostrar un mensaje por pantalla informando de ello.

def leerficherotabla():
    n = int(input("Ingrese un numero del 1 al 10"))
    m = int(input("Ingrese la linea a conocer"))
    nombreFichero = f"tabla-{n}.txt"
    try:
        with open(nombreFichero, "r", encoding="utf-8") as f:
            lineas = f.readlines()
            if 1 <= m <= len(lineas):
                print(lineas[m-1].strip())
            else:
                print(f"La linea no existe")
    except FileNotFoundError:
        print(f"El fichero no se encontro")
