import axios from 'axios';
const apiKey = process.env.RAPID_API_KEY

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {

    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': apiKey',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
  
