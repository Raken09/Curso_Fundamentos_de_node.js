const { exec, spawn } = require('child_process');
const { Console } = require('console');

/* exec('dir', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log(stdout);
}); */

let proceso = spawn('dir', ['/c',]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('Está muerto?');
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on('exit', function() {
    console.log('Proceso terminado');
})