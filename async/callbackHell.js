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

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log("Bla bla bla bla...");
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios ", nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function (){
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// --
console.log("Inicio");
hola("Edward", function (nombre) {
    conversacion(nombre, 3, function () {
        console.log("Fin");
    });
})
/* console.log("Iniciando proceso...");
hola("Edward", function(nombre) { // Ejecuto la funcion hola, la cual tiene un setimeout de 1s
    hablar(function(){
        hablar(function(){
            hablar(function(){
                adios(nombre, function(){ // Luego se ejecuta la función adios.
                    console.log("Proceso terminado");
                });
            });
        });
    })
}); */
