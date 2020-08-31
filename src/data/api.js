import ky from 'ky-universal';

const apiUrl = process.env.REACT_APP_API_URL;

const searchLocations = (phrase) => {
  return ky
    .get(`${apiUrl}location/search/`, {
      searchParams: { query: phrase },
      retry: 0,
    })
    .json();
};
const API = {
  searchLocations,
};

export default API;
