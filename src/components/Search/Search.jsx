import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setResults, setCurrentPhrase } from 'data/redux/search/search.actions';

import useDebounce from 'hooks/useDebounce';
import API from 'data/api';

import style from './Search.module.scss';

function Search() {
  const dispatch = useCallback(useDispatch(), []);
  // const stableDispatch = useCallback(dispatch, []);

  const [searchTerm, setSearchTerm] = useState('');

  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      const fetchData = async () => {
        if (!debouncedSearchTerm) {
          dispatch(setCurrentPhrase(''));
          dispatch(setResults([]));
          return;
        }
        setIsSearching(true);
        const response = await API.searchLocations(debouncedSearchTerm);
        dispatch(setCurrentPhrase(debouncedSearchTerm));
        dispatch(setResults(response));
        setIsSearching(false);
      };

      fetchData();
    },

    [debouncedSearchTerm, dispatch] // Only call effect if debounced search term changes
  );
  return (
    <div className={style.Search}>
      <input
        type="text"
        placeholder="Search location..."
        className={style.Input}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isSearching ? <span>loading</span> : null}
    </div>
  );
}

export default Search;
