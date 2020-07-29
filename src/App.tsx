import React from 'react';
import './App.css';
import { ipcRenderer } from 'electron';

function App() {

  const greeting = require('./greeting.json');
  // let items: Array<string> = [];
  

  // ipcRenderer.on('item:add', (e, item: string) => {
  //   console.log(item);  
  // });

  return (
    <div className="App">
      <div>Hello Electron!{greeting.message}</div>
      {/* <ul></ul> */}
    </div>
  );
}

export default App;
