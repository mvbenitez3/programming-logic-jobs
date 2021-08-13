/*
Cree un programa que pida al usuario la fecha de su
nacimiento, almacene tal valor en una constante e imprima
un mensaje al usuario notificando el día de su cumpleaños.
Recuerde hacer

 Algoritmo mostrar_valores_cumpleaños
    Fecha fechaNacimiento
    

    MOSTRAR "Ingrese su fecha de nacimiento"
    LEER (fechaNacimiento)
    
    Constante FECHA=fechaNacimiento

    MOSTRAR "Su fecha de cumpleaños es "+FECHA
    
FinAlgoritmo
*/

var fechaNacimiento;

fechaNacimiento=prompt("Ingres su fecha de nacimiento");

const FECHA = fechaNacimiento;

console.log("Su fecha de cumpleaños es",FECHA);

