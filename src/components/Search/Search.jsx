import React from 'react';

import style from './Search.module.scss';

function Search() {
  return (
    <div className={style.Search}>
      <input
        type="text"
        placeholder="Search location..."
        className={style.Input}
      />
    </div>
  );
}

export default Search;
