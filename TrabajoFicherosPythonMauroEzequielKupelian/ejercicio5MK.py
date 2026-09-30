#Ejercicio 5
# El fichero cotización.csv contiene las cotizaciones de las empresas del IBEX35 con las siguientes columnas: Nombre (nombre de la empresa), 
# Final (precio de la acción al cierre de bolsa), Máximo (precio máximo de la acción durante la jornada), Mínimo (precio mínimo de la acción durante la jornada), Volumen (Volumen al cierre de bolsa), Efectivo (capitalización al cierre en miles de euros).

# 1. Construir una función reciba el fichero de cotizaciones y  devuelva un diccionario con los datos del fichero por columnas.

# 2. Construir una función que reciba el diccionario devuelto  por la función anterior y cree un fichero en formato csv con el mínimo, el máximo y la media de cada columna.
import csv

def cargarCotizacion(fichero):
    dict_cotizaciones = {}
    with open(fichero, "r", encoding="utf-8") as f:
        lector = csv.reader(f, delimiter=";")
        columnas = next(lector)
        for col in columnas:
            dict_cotizaciones[col] = []

        for fila in lector:
            for col, valor in zip(columnas, fila):
                if col.lower() == "nombre":
                    dict_cotizaciones[col].append(valor)
                else:
                    val_clean = valor.replace(".", "").replace(",", ".")
                    dict_cotizaciones[col].append(float(val_clean))
    return dict_cotizaciones

def minmaxmedCSV(dict_cotizaciones, fichero_salida="minMaxMedCotizaciones.csv"):
    with open(fichero_salida, "w", newline="", encoding="utf-8") as f:
        escritor = csv.writer(f, delimiter=";")
        escritor.writerow(["Columna", "Minimo", "Maximo", "Media"])

        for col, valores in dict_cotizaciones.items():
            if col.lower() != "nombre" and valores:
                minimo = min(valores)
                maximo = max(valores)
                media = sum(valores) / len(valores) 
                escritor.writerow([col, minimo, maximo, round(media, 2)])
    print(f"Fichero creado '{fichero_salida}'")