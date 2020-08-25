import React from 'react';
import { useSelector } from 'react-redux';
import Higlight from 'react-highlighter';

import style from './SearchResults.module.scss';

const fakeResults = [
  'new york',
  'warsaw',
  'oslo',
  'berlin',
  'madrid',
  'london',
];

function SearchResults() {
  const search = useSelector((state) => state.location.data);
  return (
    <section className={style.SearchResults}>
      {fakeResults
        .filter((location) => location.includes(search))
        .map((location, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={style.Item} key={`key-${index}`}>
            <Higlight
              search={new RegExp(search, 'i')}
              matchClass={style.Higlight}
            >
              {location}
            </Higlight>
          </div>
        ))}
    </section>
  );
}

export default SearchResults;
