import React, { useState } from 'react';
import Header from './components/Header';
import BehanceList from './components/BehanceList';
import { behanceImages } from './Data';

const App = () => {
  const [sortedItems, setSortedItems] = useState(behanceImages);

  return (
    <>
      <div className="main relative overflow-hidden">
        <Header setSortedItems={setSortedItems} />
        <BehanceList sortedItems={sortedItems} />
      </div>
    </>
  );
};

export default App;
