"use strict";
/*
    1.Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de
    tipo number. Haga el llamado a la función.
*/
function showInformation(height, staudy, name) {
    if (name === void 0) { name = "Vanessa"; }
    if (staudy) {
        console.log(name + " mide " + height + " y estudia programaci\u00F3n");
    }
    else {
        console.log(name + " mide " + height + " y no estudia programaci\u00F3n");
    }
}
//showInformation(1.15);
/*
    2.Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
    llamado a la función.
*/
var suma = function (number1, number2) {
    return number1 + number2;
};
//let result = suma(2,8);
//console.log(`La suma es ${result}`);
/*
  3.Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el
  mensaje “HOLA ADSI”
 */
var message = setTimeout(function () {
    console.log("HOLA ADSI con setTimeOut");
}, 5000);
/*4. Cree una función flecha sin argumentos que imprima “Hola ADSI”.*/
var simpleArrowMessage = function () { return console.log("HOLA ADSI"); };
//simpleArrowMessage();
/*5. Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el parámetro y omita la palabra reservada return.*/
//console.log("-----función edad del usuario-----");
var userMessage = function (age) { return "Su edad es: " + age + " a\u00F1os"; };
//console.log(userMessage(24));
/*6.Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos, imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra reservada return. */
var product = function (number1, number2) { return number1 * number2; };
var resultProduct = product(5, 5);
//console.log("El resultado del producto es: ", resultProduct);
/*7.Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones.*/
var module = function (number1, number2) {
    var resultModule = number1 % number2;
    return resultModule;
};
var result = module(10, 3);
console.log("El resultado del modulo es: ", result);
