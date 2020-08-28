import React from 'react';
import { useSelector } from 'react-redux';
import { Content, Sidebar, Search, SearchResults } from './components';

import style from './App.module.scss';

function App() {
  const location = useSelector((state) => state.location.data);
  return (
    <div className={style.App}>
      <Sidebar>
        <Search />
        <SearchResults />
      </Sidebar>
      <Content>
        <header>
          <h1>{(location && location.title) || 'Choose city'}</h1>
          <p>Check date</p>
        </header>
      </Content>
    </div>
  );
}

export default App;
