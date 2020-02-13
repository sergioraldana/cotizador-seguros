//El precio base de un seguro es de Q250.00
var precioBase = 250;

//Existen 3 tipos de recargo:
// 1 El cargo edad varía con la edad del asegurado: var recargoEdad

var edadAsegurado = 40;
var mayoriaEdad;
var elegible;
var recargoEdad;

// 2. El cargo por conyugue es varía con la edad del conyuge var recargoConyuge
var conjuge;
var recargoConyuge;

// 3.recargo por Hijos varía por cantidad de hijos menores de 21 años
var hijos;
var numeroHijos;
var recargoHijos;

//Calculo de Total a pagar
var totalPagar;

//Pregunta la edad para saber si es elegible a seguro
if (edadAsegurado >= 18) {
  var mayoriaEdad = true;
} else {
  var mayoriaEdad = false;
}
// Si no es mayor de edad no se puede asegurar
if (mayoriaEdad === true) {
  var elegible = true;
} else {
  var elegible = false;
}

// Si no es elegible salir del sistema
//PENDIENTE

// Cálculo de cargo por edad si es menor de 21
if (edadAsegurado <= 18) {
  var recargoEdad = 0;
} else {
  var recargoEdad = 0.1;
}

// las siguientes llamadas a consola sirven para pruebas
console.log(precioBase);
console.log(edadAsegurado);
console.log(mayoriaEdad)
console.log(elegible)
console.log(recargoEdad)
