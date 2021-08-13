/*
3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let enterNumber = parseInt(prompt("Ingrese un número"));
let flag = isDivisibleForFive(enterNumber);

if (flag) {
  console.log("Es divisble por 5")
}else{
  console.log("No es divisble por 5")
}
function isDivisibleForFive(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}


