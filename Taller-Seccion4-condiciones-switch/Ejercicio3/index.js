/*
3. Cree un programa que lea un número y muestre si este  es divisible entre cinco o no. Realice una versión con condicionales y otra con estructura switch-case.
*/

let number = parseInt(prompt("Ingrese un número"));

if (number % 5 === 0) {
  console.log("el número", number, "es divisible en 5");
} else {
  console.log("el número", number, "no es divisible en 5");
}

/*Switch*/
switch (number % 5) {
  case 0:
    console.log("el número", number, "es divisible en 5");
    break;
  default:
    console.log("el número", number, "no es divisible en 5");
    break;
}
