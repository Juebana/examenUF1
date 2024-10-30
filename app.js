const fs = require('fs');

//Tasca 1
var productesOBJ;

function llegirProductes() {
    try {
        const data = fs.readFileSync('productes.json', 'utf-8');
        productesOBJ = JSON.parse(data);
    } catch (error) {
        console.error('S’ha produït un error en llegir el fitxer:', error.message);
        return [];
    }
}

// llegirProductes();
// console.log(productesOBJ);
