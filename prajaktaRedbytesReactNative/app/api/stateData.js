import axios from 'axios';

export const getStateData = (callback, errorcallback) => {
    const url = `https://api.covid19india.org/data.json`;

    axios.get(url)
    .then((result) =>{
        callback(result)
    })
    .catch((error) => {
        console.log(error)
        errorcallback(error);
    })
}