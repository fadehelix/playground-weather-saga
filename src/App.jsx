import React from 'react';
import { useSelector } from 'react-redux';
import {
  Content,
  Header,
  Sidebar,
  Search,
  SearchResults,
  LocationProvider,
  WeatherDetails,
  WeatherChart,
} from './components';

import style from './App.module.scss';

function App() {
  const location = useSelector((state) => state.location.details);
  return (
    <div className={style.App}>
      <Sidebar>
        <Search />
        <SearchResults />
      </Sidebar>
      <Content>
        <LocationProvider>
          <Header locationDetails={location} />
          {location && (
            <>
              <WeatherDetails locationDetails={location} />
              <section>
                <h3>daily forecast</h3>
                <WeatherChart
                  data={location && location.consolidated_weather}
                />
              </section>
            </>
          )}
        </LocationProvider>
      </Content>
    </div>
  );
}

export default App;
