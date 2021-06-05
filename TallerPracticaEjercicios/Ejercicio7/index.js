/*
    7. Escriba un programa que solicite una contraseña (el texto de la contraseña no es importante) y la vuelva a solicitar hasta que las dos contraseñas coincidan.
*/
app();

function app (){
    let flag = false;
    while (!flag) {
        pass1 =  prompt("Escriba su contraseña");
        pass2 = prompt("Escriba de nuevo su contraseña");
        if ( verifyPassword(pass1, pass2)) {
            flag = true;
        }else{
            console.log("La contraseña no coincide");
        }
    }
    console.log("¡HASTA LA VISTA!");   
}
function verifyPassword(pass1, pass2){
    return pass1 === pass2;
}
