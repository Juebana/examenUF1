const fs = require('fs');

//Tasca 1
var productesOBJ;

function llegirProductes() {
    try {
        const data = fs.readFileSync('productes.json', 'utf-8');
        productesOBJ = JSON.parse(data);
        return productesOBJ;
    } catch (error) {
        console.error('S’ha produït un error en llegir el fitxer:', error.message);
        return [];
    }
}

llegirProductes();
// console.log(productesOBJ);

// Tasca 2
let producte = productesOBJ[0];

function mostrarProducte(producte) {
    console.log('Nom: ' + producte.nom);
    console.log('Marca: ' + producte.marca);
    console.log('Preu: ' + producte.preu);
    console.log('Disponibilitat: ' + producte.disponible);
    console.log('Caracteristiques: ' + producte.caracteristiques);
}

mostrarProducte(producte);