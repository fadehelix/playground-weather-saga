import React from 'react';
import { useDispatch } from 'react-redux';
import { setLocationAction } from 'data/redux/location/location.actions';
import style from './Search.module.scss';

function Search() {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    dispatch(setLocationAction(event.target.value));
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
