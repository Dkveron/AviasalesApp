import React from 'react';

import Header from '../Header/Header';
import Filters from '../Filters/Filters';
import TicketsList from '../TicketsList/TicketsList';
import Tabs from '../Tabs/Tabs';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Filters />
        <div>
          <Tabs />
          <TicketsList />
        </div>
      </main>
    </div>
  );
};

export default App;
