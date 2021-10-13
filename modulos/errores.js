function seRompe() {
    return 3 + z;
}

try {
    seRompe();
} catch (err) {
    console.error("Ah ocurrido un error");
    console.error(err.message); // imprime el mensaje de error
    console.error(err.name); // imprime el nombre del error
    console.log("Pero lo hemos capturado");
}

console.log("Esto se ejecuta siempre");