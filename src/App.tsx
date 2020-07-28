import React from 'react';
import './App.css';

function App() {

  const greeting = require('./greeting.json');

  return (
    <div className="App">
      <div>Hello Electron!{greeting.message}</div>
    </div>
  );
}

export default App;
