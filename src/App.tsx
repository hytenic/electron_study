import React, { useState } from 'react';
import './App.css';
const { ipcRenderer } = window.require('electron');

const App = () => {

  const [items, setItems] = useState([]);
  // let items: Array<string> = [];

  ipcRenderer.on('item:add', (e: any, item: string) => {
    console.log(item);
    items.push(item);
  });

  return (
    <div className="App">
      <div>Hello Electron!</div>
      {items.map(el => {
        return <div>{el}</div>
      })}
    </div>
  );
}

// ipcRenderer.on('item:add', (e: any, item: string) => {
//   console.log(item);
// });

export default App;
