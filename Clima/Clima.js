const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9b07416efdebd36f318a03df7a34d908&units=metric`);
    return resp.data.main.temp;
}



module.exports = {
    getClima
}