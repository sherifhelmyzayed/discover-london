import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

var options = {

    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'c660422a6fmshe9ce0780f505472p174617jsn90393a9ee1f5'
    }
};


export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error)
    }
}