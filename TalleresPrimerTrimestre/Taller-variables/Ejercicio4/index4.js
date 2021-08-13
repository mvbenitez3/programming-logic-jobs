/*
Cree un programa que pida al usuario su edad, domicilio y
estado civil, a continuación, confirme al usuario los valores
introducidos por éste.
*/

/*
 Algoritmo mostrar_valores_usuario
    Entero edad
    Cadena domicilio
    Cadena estadiCivil

    MOSTRAR "Ingrese su edad"
        edad = LEER (edad)
    MOSTRAR "Ingrese domicilio"
        domicilio = LEER (doimicilio)
    MOSTRAR "Ingresar estado civil"
        estadocivil = LEER(estadoCivil)
        
    MOSTRAR "La edad ingresada es: ", edad
    MOSTRAR "la direccion ingresada es: ",  domicilio
    MOSTRAR "El estado civil ingresado es:" , estadoCivil
FinAlgoritmo
*/


let edad = parseInt(prompt("Ingrese la edad"));
let domicilio = prompt("Ingrese dirección");
let estadoCivil= prompt("Ingrese estado civil");
console.log("La edad es: ", edad);
console.log("El domicilio es: ", domicilio);
console.log("El estado civil  es: ", estadoCivil);




