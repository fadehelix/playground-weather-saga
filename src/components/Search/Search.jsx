import React from 'react';
import { useDispatch } from 'react-redux';
import { setResults, setCurrentPhrase } from 'data/redux/search/search.actions';

import API from 'data/api';

import style from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();

  const handleSearch = async (event) => {
    dispatch(setCurrentPhrase(event.target.value));
    const res = await API.searchLocations(event.target.value);
    dispatch(setResults(res));
  };

  return (
    <div className={style.Search}>
      <input
        type="text"
        placeholder="Search location..."
        className={style.Input}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
