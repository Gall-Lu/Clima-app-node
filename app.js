const lugar = require('./Lugar/Lugar');
const clima = require('./Clima/Clima');

// Nota: yargs ofrece una opción que permite poner comandos directamente.
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima.',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temo = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temo}.`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}.`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);