import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Higlight from 'react-highlighter';
import { setLocationAction } from 'data/redux/location/location.actions';

import style from './SearchResults.module.scss';

function SearchResults() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const search = useSelector((state) => state.search.phrase);
  const currentLocation = useSelector((state) => state.location.data);

  const handleChooseLocation = (location) => {
    dispatch(setLocationAction(location.woeid));
  };

  if (!results) {
    return <></>;
  }
  return (
    <section className={style.SearchResults}>
      {results &&
        results
          .filter((location) =>
            location.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((location) => (
            // eslint-disable-next-line react/no-array-index-key
            <button
              type="button"
              className={classNames(style.Item, {
                [style.ItemActive]:
                  currentLocation && currentLocation.title === location.title,
              })}
              onClick={() => handleChooseLocation(location)}
              key={`key-${location.title}`}
            >
              <Higlight
                search={new RegExp(search, 'i')}
                matchClass={style.Higlight}
              >
                {location.title}
              </Higlight>
            </button>
          ))}
    </section>
  );
}

export default SearchResults;
