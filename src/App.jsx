import React from 'react';
import { useSelector } from 'react-redux';
import {
  Content,
  Header,
  Sidebar,
  Search,
  SearchResults,
  WeatherDetails,
  withLoader,
} from './components';

import style from './App.module.scss';

const HeaderWithLoader = withLoader(Header);
const WeatherDetailstWithLoader = withLoader(WeatherDetails);
const SearchResultsWithLoader = withLoader(SearchResults);

function App() {
  const location = useSelector((state) => state.location.details);
  const isLocationLoading = useSelector((state) => state.location.isLoading);
  const isSearchResultsLoading = useSelector((state) => state.search.isLoading);

  return (
    <div className={style.App}>
      <Sidebar>
        <Search />
        <SearchResultsWithLoader isLoading={isSearchResultsLoading} />
      </Sidebar>
      <Content>
        <HeaderWithLoader
          isLoading={isLocationLoading}
          color={style.appColorPrimary}
          locationDetails={location}
        />
        {location && (
          <>
            <WeatherDetailstWithLoader
              isLoading={isLocationLoading}
              color={style.appColorPrimary}
              locationDetails={location}
            />
          </>
        )}
      </Content>
    </div>
  );
}

export default App;
