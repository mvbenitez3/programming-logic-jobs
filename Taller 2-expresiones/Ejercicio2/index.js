/*
  2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos mencionados y muestre si el producto paga IVA o no.
*/

/*
let nombreProducto = (prompt("Ingrese nombre del producto"));

if(nombreProducto === "lentejas" || nombreProducto === "arroz"){
    console.log("No paga IVA");
}
if(nombreProducto === "vino" && nombreProducto === "crema"){
    console.log("Debe pagar IVA");
}
*/
let prodName = (prompt("Ingrese nombre del producto"));

switch (prodName) {
  case "crema":
    console.log("paga IVA");
    break;
  case "vino":
    console.log("paga IVA");
    break;
  case "lentejas":
    console.log("No paga IVA");
    break;
  case "arroz":
    console.log("No paga IVA");
    break;
  default:
    console.log("Introduzca un producto válido");
    break;
}