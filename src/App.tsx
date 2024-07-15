import React from 'react';
import './App.css';
import Desktop from './Images/Desktop';
import Phone from './Images/Phone';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome Friend!</h1>
        <h3>Download your Guiseppe Land image below </h3>
      </header>
      <div className="Testing" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Desktop/>
        <Phone/>
      </div>
    </div>
  );
}

export default App;
