nombres_productos=[]
cantidades_stock=[]
try:
    n_productos = int(input("Cuantos productos va a registrar?: "))

    for i in range(n_productos):
        nombre = input(f"Ingrese el nombre del producto{i+1}: ")

        while True:
            try:
                cantidad=int(input(f"Ingrese stock de {nombre}"))
                break
            except:
                print ("Error: Ingrese un numero entero valido")

        nombres_productos.append(nombre)
        cantidades_stock.append(cantidad)

    print("REPORTE INVENTARIO\n")
    suma_total = 0
    for i in range(len(nombres_productos)):
        nombre= nombres_productos[i]
        stock = cantidades_stock[i]
        suma_total+= stock #suma_total = suma_total + stock

        if stock == 0:
            print(f"CRITICO: {nombre} Agotado,")
        else:
            if stock < 5:
                print(f"ALERT: {nombre} Stock bajo {stock} unidades")
            if stock > 20:
                print(f"{nombre}: Stock excedente, aplicar descuento")
            else:
                print(f"{nombre}: Stock saludable")

    promedio = suma_total / n_productos        
    print(f"Total de productos: {n_productos}\n")
    print(f"Promedio de stock en bodega{promedio}")
except ValueError:
    print("Error:El numero de productos debe ser entero")
    