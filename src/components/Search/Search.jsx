import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentTerm } from 'data/redux/search/search.actions';

import style from './Search.module.scss';

function Search() {
  const dispatch = useCallback(useDispatch(), []);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      dispatch(setCurrentTerm(searchTerm));
    }
  }, [searchTerm, dispatch]);
  return (
    <div className={style.Search}>
      <input
        type="text"
        placeholder="Search location..."
        className={style.Input}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
