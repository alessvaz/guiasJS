renta=float(input("ingrese su reta anual"))

if renta>=0.02 and renta<=472.01:
    print("usted no tiene impositivos")
elif renta>=472.02 and renta<=895.25:
    print("su porcentaje es de 10%")
elif renta>=895.26 and renta<=2.03811:
    print("su porcentaje es de 20%")
elif (renta>=2.03812)   :
    print("porcentaje es de 30%")
else:
    print("no")       