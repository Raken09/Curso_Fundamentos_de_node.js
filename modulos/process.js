
process.on('beforeExit', () => { // Antes de salir del proceso
    console.log("El proceso va a terminar");
})

process.on('exit', () => { // Cuando el proceso termina, acá se desconecta del eventloop
    console.log("El proceso acabó");
})

process.on('uncaughtException', (err, origen) => { // Cuando se produce un error que no se capturó
    console.log("Error no capturado: " + err);
})

const suma = 3 + g;