


function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e, null);
        }
    }, 1000);
}


asincrona(function(err, result) {
    if (err) {
        console.error('Tensmos un error: ', err);
        return false;
        //throw err; No va a funcionar
    } else {
        console.log('Result: ', result);
    }
})