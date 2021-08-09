import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    //'x-rapidapi-key': process.env.REACT_APP_TRAVELADVISOR_API_KEY,
    'x-rapidapi-key': 'f4e7793e8dmshe9e788ecda5cd16p1c5408jsn730df4fd43c5',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
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