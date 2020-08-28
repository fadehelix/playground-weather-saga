import React from 'react';
import { useDispatch } from 'react-redux';
import { setResults, setCurrentPhrase } from 'data/redux/search/search.actions';
import ky from 'ky';
import style from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleSearch = async (event) => {
    dispatch(setCurrentPhrase(event.target.value));

    const search = await ky
      .get(`${apiUrl}location/search/`, {
        searchParams: { query: event.target.value },
        retry: 0,
      })
      .json();
    dispatch(setResults(search));
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
