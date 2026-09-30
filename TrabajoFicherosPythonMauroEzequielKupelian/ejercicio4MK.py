#Ejercicio 4
# Escribir un programa que acceda a un fichero de internet mediante su url y muestre por pantalla el número de palabras que contiene.
from urllib.request import urlopen

def cantidadPalabras(url):
    try:
        with urlopen(url) as respuesta:
            contenido=respuesta.read().decode("utf-8")
            palabras = contenido.split()
            print(f"El fichero tiene {len(palabras)} cntidad de palabras")
    except Exception as e:
        print(f"Error con la url: {e}")