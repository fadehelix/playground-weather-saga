import React, { useEffect, useState, useCallback } from 'react';
import { Loader } from 'components';
import { useDispatch } from 'react-redux';
import { setResults, setCurrentTerm } from 'data/redux/search/search.actions';

import useDebounce from 'hooks/useDebounce';
import API from 'data/api';

import style from './Search.module.scss';

function Search() {
  const dispatch = useCallback(useDispatch(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      const fetchData = async () => {
        if (!debouncedSearchTerm) {
          dispatch(setCurrentTerm(''));
          dispatch(setResults([]));
          return;
        }
        setIsLoading(true);
        const response = await API.searchLocations(debouncedSearchTerm);
        dispatch(setCurrentTerm(debouncedSearchTerm));
        dispatch(setResults(response));
        setIsLoading(false);
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
      {isLoading ? <Loader /> : null}
    </div>
  );
}

export default Search;
