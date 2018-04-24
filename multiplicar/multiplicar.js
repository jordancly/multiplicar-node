//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("============".green);
    console.log(`tabla de ${ base }`.green);
    console.log("============".green);

    for (let x = 1; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base * x}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } introducido no es un numero`);
            return;
        }

        let data = '';

        for (let x = 1; x <= limite; x++) {
            data += `${base} * ${x} = ${base * x} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}