import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {

    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '0959bb1be1mshfd3da28aae45af0p1cc72bjsn6e453aa63105',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
  