/*function soyAsincrona(miCallback) {
    setTimeout(function() {
        console.log("Estoy siendo asincrona");
        miCallback();
    }, 1000);
}
console.log("No soy asincrono");
soyAsincrona(function() {
    console.log("Proceso terminado");
});
*/

function hola(nombre, miotroCallback) {
    setTimeout(function() {
        console.log("Hola " + nombre);
        miotroCallback(nombre);
    },1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios ", nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");
hola("Edward", function(nombre) { // Ejecuto la funcion hola, la cual tiene un setimeout de 1s
    adios(nombre, function(){ // Luego se ejecuta la función adios.
        console.log("Proceso terminado");
    });
});

/* hola("Edward", function() {});
adios("Edward", function() {}); */