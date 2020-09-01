import ky from 'ky-universal';

const apiUrl = process.env.REACT_APP_API_URL;

const searchLocations = (searchTerm) => {
  return ky
    .get(`${apiUrl}location/search/`, {
      searchParams: { query: searchTerm },
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
