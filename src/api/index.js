import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';
const indiaStatesUrl = 'https://covid19.mathdro.id/api/countries/india/confirmed';
const stateNames = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
const districtNames = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/';

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

export const fetchStateNames = async () => {
    try{
        const {data : { states }} = await axios.get(stateNames);
        return states;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchdistrictNames = async (stateId) => {
    try{
        const {data : { districts }} = await axios.get(`${districtNames}${stateId}`);
        return districts;
    }
    catch(error){
        console.log(error);
    }
}

export const fetchVaccineCenters = async (districtId, date) => {
    let link = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`;
    try{
        const {data : {centers}} = await axios.get(link);
        return centers;
    }
    catch(error){
        console.log(error);
    }
}

