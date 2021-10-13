const fs = require('fs');

// Leer un archivo
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })

}

// Escribir un archivo
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log("No se puedo escribir", err);
        } else {
            console.log("Se escribio correctamente");
        }
    })
}

// Eliminar un archivo
function eliminar(ruta, cb) {
    fs.unlink(ruta, cb);
}

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
//leer(__dirname + '/archivo.txt', console.log);
eliminar(__dirname + '/archivo1.txt', console.log);

