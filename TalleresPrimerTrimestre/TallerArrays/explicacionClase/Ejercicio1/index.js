/* 

*/

let ages = [41, 52, 23, 10, 50];
let longitudArreglo =  ages.length;
console.log("longitud del arreglo" , longitudArreglo);

//agregar elementos en un arreglo
let peso= [10];
let pesoUsuarios1 = parseInt(prompt("Ingrese su peso"));
peso.push(pesoUsuarios1);

//Agregar varios elementos en el arrelo
peso.push(45, 89, 26);
console.log("Estado arreglo 2: " , peso);

//eliminar elementos de un arreglo, mediante el indice en un arreglo. 
// usamos el metodo splice, este metodo tiene como primer parametro
//el indice desde  el que  queremos eliminar, y como segundo 
//parametro, el numero de elementos que queremos eliminar a partir del indice.  

let estaturas = [178, 165, 190, 155];
//eliminar el elemento de indice 2
estaturas.splice(2,1);
console.log("Estado estaturas ", estaturas);