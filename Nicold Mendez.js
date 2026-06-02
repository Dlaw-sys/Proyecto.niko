//EJERCICIO 1
let unidad, cantidad, mi, km, mt;

unidad = parseInt(prompt("Digite 1 para millas - 2 para kilometros - 3 para metros"));
cantidad = parseFloat(prompt("Digite el valor a convertir:"));

switch (unidad) {
    case 1:
        km = cantidad * 1.60934;
        mt = cantidad * 1609.34;
        document.write(cantidad + " millas equivalen a " + km + " kilometros y " + mt + " metros");
        break;

    case 2:
        mi = cantidad * 0.621371;
        mt = cantidad * 1000;
        document.write(cantidad + " kilometros equivalen a " + mi + " millas y " + mt + " metros");
        break;

    case 3:
        mi = cantidad * 0.000621371;
        km = cantidad / 1000;
        document.write(cantidad + " metros, equivalen a " + mi + " millas; " + km + " kilometros")
        break;

    default:
        document.write("Valores incorrectos.");
}

//EJERCICIO 2
let d1,d2,d3,d4,d5,d6,num,coc
num=parseInt(prompt("ingrese un numero de 6 cifras: "))
d6=num%10
coc=Math.trunc(num/10)
d5=coc%10
coc=Math.trunc(coc/10)
d4=coc%10
coc=Math.trunc(coc/10)
d3=coc%10
coc=Math.trunc(coc/10)
d2=coc%10
coc=Math.trunc(coc/10)
d1=coc%10
coc=Math.trunc(coc/10)
document.write("la suma es: " + (d4+d3))
document.write("\nla multiplicacion es " + (d1*d6))
document.write("\nla resta es:" + (d2-d5))

//EJERCICIO 3 
let hora = parseInt(prompt("Ingrese una hora (0/23): "));
let minutos = parseInt(prompt("Ingrese un minuto (0/59): "));
let segundos = parseInt(prompt("Ingrese un segundo (0/59): "));

segundos++;

if (segundos === 60) {
    segundos = 0;
    minutos++;

    if (minutos === 60) {
        minutos = 0;
        hora++;
    }
}

if (hora === 24) {
    hora = 0;
}

hora = String(hora).padStart(2, "0");
minutos = String(minutos).padStart(2, "0");
segundos = String(segundos).padStart(2, "0");

document.write(hora + ":" + minutos + ":" + segundos);

//EJERCICIO 4
let a = parseFloat(prompt("Ingrese a:"));
let b = parseFloat(prompt("Ingrese b:"));
let c = parseFloat(prompt("Ingrese c:"));

if (a === 0) {
    document.write("El coeficiente a no puede ser 0.");
} else {

    let discriminante = b ** 2 - 4 * a * c;

    if (discriminante === 0) {

        let x = (-b) / (2 * a);
        document.write("Existe una unica solucion real: " + x);

    } else if (discriminante > 0) {

        let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        document.write("Hay dos soluciones reales:<br>");
        document.write("x1 = " + x1 + "<br>");
        document.write("x2 = " + x2);

    } else {

        let real = (-b) / (2 * a);
        let imaginaria = Math.sqrt(-discriminante) / (2 * a);

        document.write("Existen dos soluciones complejas:<br>");
        document.write("x1 = " + real + " + " + imaginaria + "i<br>");
        document.write("x2 = " + real + " - " + imaginaria + "i");
    }
}

//EJERCICIO 5
let pos = 0, neg = 0, cero = 0, tem;

while (true) {

    tem = parseFloat(prompt("Ingrese una temperatura:"));

    if (tem == 99) {
        break;
    } else if (tem > 0) {
        pos++;
    } else if (tem < 0) {
        neg++;
    } else {
        cero++;
    }
}

document.write("Temperaturas mayores a 0: " + pos + "<br>");
document.write("Temperaturas iguales a 0: " + cero + "<br>");
document.write("Temperaturas menores a 0: " + neg)
//EJERCICIO 6
switch (n2) {
        case 0:
        document.write("avion de entrenamiento ");
        break;
    case 1:
        document.write("avion militar ");
        break;
    case 2:
        document.write("avion de carga ");
        break;
    case 3:
        document.write("avion de pasajeros ");
        break;
    case 4:
        document.write("avion sin identificacion ");
        break;
    case 5:
        document.write("avion de transporte pesado ");
        break;
    case 6:
        document.write("avion enemigo ");
        break;
    case 7:
        document.write("avion multiproposito ");
        break;
    case 8:
        document.write("helicoptero ");
        break;
    case 9:
        document.write("globo aerostatico ");
        break;
}
//EJERCICIO 7
function recogerDatos(){
    let nom, tel, correo, frec, dia;
    let cantA, cantAA, cantAAA, ctotal, vtotal, dcto=0, otrod=0, vfinal, totalPago;

    nom = document.getElementById("cliente").value;
    tel = document.getElementById("tel").value;
    correo = document.getElementById("email").value;
    frec = document.getElementById("frec").checked;
    cantA = document.getElementById("cantA").value;
    cantAA = document.getElementById("cantAA").value;
    cantAAA = document.getElementById("cantAAA").value;
    dia = document.getElementById("dia").value;

    ctotal = parseInt(cantA) + parseInt(cantAA) + parseInt(cantAAA);
    vtotal = (parseInt(cantA) * 600) + (parseInt(cantAA) * 700) + (parseInt(cantAAA) * 750);

    if(ctotal >= 30 && ctotal <= 45){
        dcto = vtotal * 0.1;
    } else if(ctotal >= 46 && ctotal <= 70){
        dcto = vtotal * 0.15;
    } else if(ctotal >= 71 && ctotal <= 100){
        dcto = vtotal * 0.2;
    } else if(ctotal > 100){
        dcto = vtotal * 0.25;
    } else {
        dcto = 0;
    }

    if (frec === true){
        otrod = vtotal * 0.025;
        frec = ". Sí";
    } else {
        otrod = 0;
        frec = ". No";
    }

    vfinal = vtotal - dcto - otrod;

    switch (dia){
        case "1":
            totalPago = vfinal + (vfinal * 0.05);
            dia = "de Lunes a Viernes";
            break;

        case "2":
            totalPago = vfinal - (vfinal * 0.05);
            dia = "Sábado";
            break;

        case "3":
            totalPago = vfinal;
            dia = "Domingo";
            break;
    }

    alert(
        nom + ", compró " + cantA + " huevos tipo A, " +
        cantAA + " huevos tipo AA y " +
        cantAAA + " huevos tipo AAA, el día " +
        dia + frec + " es cliente frecuente." +
        "\nCompró un total de " + ctotal +
        " huevos por un valor de $" + vtotal +
        ", con un descuento de $" + dcto +
        " por cantidad de huevos comprados y un descuento adicional de $" +
        otrod + " por ser cliente frecuente, el valor total a pagar es de $" +
        totalPago
    );
}
//EJERCICIO 8
let x = parseInt(prompt("Ingrese x:"));
let n = parseInt(prompt("Ingrese n:"));

let suma = 0;

for (let i = 2; i <= n; i += 2) {
    suma += (x ** i) / i;
}

//EJERCICIO 9
let ajedrez = 0, atletismo = 0, futbol = 0, gimnasia = 0, natacion = 0;
let opcion;

for (let cont = 1; cont <= 400; cont++) {

    do {
        opcion = parseInt(prompt(
            "Seleccione el deporte de la persona " + cont + ":\n" +
            "1. Ajedrez\n" +
            "2. Atletismo\n" +
            "3. Fútbol\n" +
            "4. Gimnasia\n" +
            "5. Natación"
        ));

    } while (opcion < 1 || opcion > 5 || isNaN(opcion));

    switch (opcion) {
        case 1:
            ajedrez++;
            break;
        case 2:
            atletismo++;
            break;
        case 3:
            futbol++;
            break;
        case 4:
            gimnasia++;
            break;
        case 5:
            natacion++;
            break;
    }
}

document.write("Resultados registrados:<br><br>");
document.write("Ajedrez: " + ajedrez + "<br>");
document.write("Atletismo: " + atletismo + "<br>");
document.write("Fútbol: " + futbol + "<br>");
document.write("Gimnasia: " + gimnasia + "<br>");
document.write("Natación: " + natacion);
//EJERCICIO 10
let clave;
let errores = 0;

let acceso = "NICOLLM.95";

while (errores < 3) {

    clave = prompt("Digite el codigo de ingreso:");

    if (clave == acceso) {
        document.write("Ingreso autorizado");
        break;
    }

    errores++;

    if (errores < 3) {
        alert("Código incorrecto");
    }
}

if (errores == 3) {
    alert("USUARIO BLOQUEADO");
}
//EJERCICIO 11
let cantidad = 0;
let dato;

while (true) {

    dato = prompt("Digite un numero multiplo de 5 (otro numero para finalizar):");

    if (dato == "" || dato == null) {
        alert("Debe ingresar un valor valido");
        continue;
    }

    dato = parseInt(dato);

    if (dato % 5 == 0) {
        cantidad++;
    } else {
        alert("Numero no valido para continuar");
        break;
    }
}

document.write("Proceso terminado<br>");
document.write("Cantidad de numeros multiplos de 5 registrados: " + cantidad);
//EJERCICIO 12
let numero;
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

numero = parseInt(prompt("Digite un numero del 1 al 7:"));

if (numero >= 1 && numero <= 7) {
    alert("El dia correspondiente es: " + dias[numero - 1]);
} else {
    alert("Valor incorrecto");
}
//EJERCICIO 13
let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

document.write("La suma de los numeros del arreglo es: " + suma);
//EJERCICIO 14
let numeros = [];
let pares = 0;
let impares = 0;

while (true) {

    let numero = prompt("Digite un numero (0 para finalizar):");
    numero = Number(numero);

    if (numero === 0) break;

    numeros.push(numero);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Numeros almacenados:", numeros);
console.log("Cantidad de pares:", pares);
console.log("Cantidad de impares:", impares);