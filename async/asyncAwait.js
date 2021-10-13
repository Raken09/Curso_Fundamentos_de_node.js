async function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + nombre);
            resolve(nombre);
        },1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla...");
            resolve("Hay un error");
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios ", nombre);
            resolve();
        }, 1000);
    });
    
}

async function main() {
    await hola("Edward");
    await hablar();
    await adios("Edward");
    console.log("Fin");
}
console.log("Inicio");

main();
