let suma = 0;

console.time('for');

for (let i = 0; i < 1000000; i++) {
    suma += i;
}

console.time('asincrona');
console.log('Comienza el proceso asincrono')
asincrona()
    .then(() => {
        console.timeEnd('asincrona');
    });


console.timeEnd('for');

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Termina el proceso asincrono');
            resolve();
        }, 1000);
    });
}