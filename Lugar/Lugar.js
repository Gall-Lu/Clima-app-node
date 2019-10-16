const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    // console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        // timeout: 1000,
        headers: { 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'x-rapidapi-key': 'dcf4c38b26msh8a20de373468f5bp1dac54jsn7066efe23890' }
    });

    // instance.get()
    //     .then((result) => {
    //         console.log(result.data.Results[0]);

    //     }).catch((err) => {
    //         console.log('Error!!! ', err);

    //     });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}