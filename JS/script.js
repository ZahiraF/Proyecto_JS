// variables, let, constantes

// VARIABLES
var nombre = "Zahira";
var apellido = "Fernandez";
console.log(nombre);
console.log(apellido);

//LET

let frutaFavorita = "frambuesa";
console.log(frutaFavorita);

//CONST

const animal = "tigre";
console.log(animal);

//FUNCIONES CALCULOS MATEMÁTICOS

var num1 = 10;
var num2 = 5;
// SUMA
function funcionSuma(num1, num2) {
    var sumas = 0;
    sumas = num1 + num2;
    return sumas;
}
//RESTA
function funcionResta(num1, num2) {
    var restas;
    restas = num1 - num2;
    return restas;
}
//DIVISIÓN
function funcionDivision(num1, num2) {
    var divisiones;
    divisiones = num1 / num2;
    return divisiones;
}
//MULTIPLICACIÓN
function funcionMultiplicacion(num1, num2) {
    var multiplicaciones;
    multiplicaciones = num1 * num2;
    return multiplicaciones;
}
//MÓDULO O RESTO
function funcionModulo(num1, num2) {
    var modulos;
    modulos = num1 % num2;
    return modulos;
}



console.log(funcionSuma(num1, num2));
console.log(funcionResta(num1, num2));
console.log(funcionDivision(num1, num2));
console.log(funcionMultiplicacion(num1, num2));
console.log(funcionModulo(num1, num2));

//CREAR UN TIPO DE ARRAY Y RECORRERLO

var persona = ['Zahira', 'Fernandez', 17];
persona.forEach(function(per) {
    console.log(per);
});