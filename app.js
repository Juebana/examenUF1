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

// Tasca 2
let producte = productesOBJ[0];

function mostrarProducte(producte) {
    let arr = [producte.caracteristiques];
    console.log('Nom: ' + producte.nom);
    console.log('Marca: ' + producte.marca);
    console.log('Preu: ' + producte.preu);
    console.log('Disponibilitat: ' + producte.disponible);
    console.log('Caracteristiques: ');
    console.log(arr.forEach(caracteristiquesFuncio));
}

function caracteristiquesFuncio(value) {
    console.log(value);
}

// Tasca 3

function mostrarProductes(productes) {
    productes.forEach(mostrarProducte);
}

// Tasca 4

function mostrarProducteID(productes, id) {
    const producte = productes.find(producte => producte.id === id);
    if (producte) {
        mostrarProducte(producte);
    } else {
        console.log('No s’ha trobat el producte amb ID'+ id);
    }
}

// Tasca 5

console.log('TASCA 1:');
llegirProductes();
console.log(productesOBJ);

console.log('\nTASCA 2:');
mostrarProducte(producte);

console.log('\nTASCA 3:');
mostrarProductes(productesOBJ);

console.log('\nTASCA 4:');
mostrarProducteID(productesOBJ, 1);