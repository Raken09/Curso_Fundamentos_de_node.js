//console.log(global);
console.log(setInterval);

let i = 0;
let intervalo = setInterval(function(){
    console.log("Hola");
    if (i === 3) {
        clearInterval(intervalo); // Detiene el intervalo
        return;
    }
    i++;
}, 1000);

setImmediate(function(){ // Ejecuta una funcion de forma inmediata
    console.log("Hola inmediato");
});

console.log(__dirname);
console.log(__filename);