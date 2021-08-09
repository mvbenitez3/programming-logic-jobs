let promesa20 = new Promise((resolve, reject) =>{
    resolve("Soy la promesa 20");
});

let promesa21 = new Promise((resolve, reject) =>{
    resolve("Soy la promesa 21");
})

let promesa22 = new Promise((resolve, reject) =>{
    resolve("Soy la promesa 22");
})
promesa20.then((res)=>{
    console.log("Promesa 20", res);
    return promesa20;
})
promesa20.then((res)=>{
    console.log("Promesa 21", res);
    return promesa21;
})
promesa20.then((res)=>{
    console.log("Promesa 22", res);
    return promesa22;
}).catch((err) =>{
    console.log("Error: ", err);
    
})