console.log("Hola mundo");
console.info("Hola mundo");
console.error("Hola mundo"); // Imprime un mensaje de error
console.warn("Hola mundo"); // Imprime un mensaje de advertencia

var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'y'
    }
];
console.table(tabla); // Imprime una tabla con los datos de la variable

console.group('Conversación:');
console.log('Hola');
console.log('bla bla bla');
console.log('Adios');
console.groupEnd('conver');

console.log('Otra cosa');

console.count("Veces");
console.count("Veces");
console.countReset("Veces");
console.count("Veces");