/*
    4. Cree un programa que tome el precio de un producto e imprima su precio final 
    al consumidor con un IVA de 19%.
*/

const IVA = 0.19;
let productPrice = parseFloat(prompt("Ingrese el valor de un producto"));
let finalPrice = productPrice + (productPrice * IVA); 

console.log("El precio final del producto con un IVA de", IVA, "es:", finalPrice); 