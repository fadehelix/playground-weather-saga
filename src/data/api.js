import ky from 'ky-universal';

const apiUrl = process.env.REACT_APP_API_URL;

// TODO: rename 'phrase' to 'searchTerm'
const searchLocations = (phrase) => {
  return ky
    .get(`${apiUrl}location/search/`, {
      searchParams: { query: phrase },
      retry: 0,
    })
    .json();
};

const fetchLocation = (locationID) => {
  return ky
    .get(`${apiUrl}location/${locationID}`, {
      retry: 0,
    })
    .json();
};

const API = {
  searchLocations,
  fetchLocation,
};

export default API;
