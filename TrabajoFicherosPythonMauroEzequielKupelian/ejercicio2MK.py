#Ejercicio 2
# Escribir una función que pida un número entero entre 1 y 10, lea el fichero tabla-n.txt con la tabla de multiplicar de ese número, donde n es el número introducido, y la muestre por pantalla. Si el fichero no existe debe mostrar un mensaje por pantalla informando de ello.

def mostrartabla():
    n= int(input("Ingresa numero entre 1 y 10"))
    nombreFichero=f"tabla-{n}.txt"
    try:
        with open(nombreFichero, "r", encoding="utf-8") as f:
            print(f.read())
    except FileNotFoundError:
        print(f"Elfichero no se encontro")