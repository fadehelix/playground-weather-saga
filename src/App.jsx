import React from 'react';
import { useSelector } from 'react-redux';
import { Content, Header, Sidebar, Search, SearchResults } from './components';

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
        <Header location={location} />
      </Content>
    </div>
  );
}

export default App;
