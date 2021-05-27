/*
4. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let enterNumber = parseInt(prompt("Ingrese un número"));
let flag = isPrimeNumber(enterNumber);

if (flag) {
  console.log("El numero es primo");
}else{
  console.log("el numero no es primo");
}
function isPrimeNumber(number) {
  if (number >= 1 && number <= 15) {
    if (number === 2 || number === 3 || number === 5 || number === 7 || number === 11 || number === 13) {
      return true;
    }
    return false;
  }
}





