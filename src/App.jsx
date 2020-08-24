import React from 'react';

import { Content, Sidebar, Search } from './components';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.App}>
      <Sidebar>
        <Search />
      </Sidebar>
      <Content>
        <header>
          <h1>Name of the location</h1>
          <p>Check date</p>
        </header>
      </Content>
    </div>
  );
}

export default App;
