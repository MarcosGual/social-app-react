import React from 'react';
import './App.css';
import BarraLateral from './BarraLateral';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />

      {/*App body*/}
      <div className="app__body">
        <BarraLateral />
        {/* Feed */}
        {/* Widgets*/}
      </div>
    </div>
  );
}

export default App;
