import axios from 'axios';

export const getStateDistrictData = (callback, errorcallback) => {
    const url = `https://api.covid19india.org/state_district_wise.json`;

    axios.get(url)
    .then((result) =>{
        callback(result)
    })
    .catch((error) => {
        console.log(error)
        errorcallback(error);
    })
}