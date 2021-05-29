import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const indiaStatesUrl = 'https://covid19.mathdro.id/api/countries/india/confirmed';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try{
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch(error){
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`);
        const response =  countries.map((country) => country.name);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchIndianStatesData = async () => {
    try{
        const {data} = await axios.get(indiaStatesUrl);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
