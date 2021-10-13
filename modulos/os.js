const os = require('os');

//console.log(os.arch());
//console.log(os.cpus().length);
//console.log(os.platform());
//console.log(os.constants);

function kb(bytes) { return bytes / 1024;}
function mb(bytes) { return kb(bytes) / 1024;}
function gb(bytes) { return mb(bytes) / 1024;}
console.log(os.freemem()); // Memoria RAM libre en bytes
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem())); // Memoria RAM total en bytes

console.log(os.hostname()); // Nombre del equipo

console.log(os.homedir()); // Directorio home del usuario
console.log(os.tmpdir()); // Directorio temporal del usuario
console.log(os.userInfo()); // Información del usuario
console.log(os.networkInterfaces()); // Interfaces de red