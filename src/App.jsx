import React from 'react';
import { useSelector } from 'react-redux';
import {
  Content,
  Header,
  Sidebar,
  Search,
  SearchResults,
  LocationProvider,
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
          <Header location={location} />
        </LocationProvider>
      </Content>
    </div>
  );
}

export default App;
