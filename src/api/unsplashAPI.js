import axios from 'axios';

const ACCESS_KEY = 'nCWhIG2kkYfa1sFLPwMs2Py8ff1Ma8fMK5eHfuqyrCQ'; // Додай свій ключ доступу
axios.defaults.baseURL = 'https://api.unsplash.com/';

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
