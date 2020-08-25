import React from 'react';

import style from './SearchResults.module.scss';

function SearchResults() {
  return (
    <section className={style.SearchResults}>
      <div className={style.Item}>Fake location 1</div>
      <div className={style.Item}>
        Fake <span className={style.Higlight}>location 2</span>
      </div>
      <div className={style.Item}>Fake location 3</div>
    </section>
  );
}

export default SearchResults;
