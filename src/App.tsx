import React, { useState } from 'react';
import './App.css';
const { ipcRenderer } = window.require('electron');

const App = () => {

  const [items, setItems] = useState<Array<string>>([]);

  ipcRenderer.on('item:add', (e: any, item: string) => {
    let newItems: Array<string> = items.slice();
    console.log(item);
    newItems.push(item);
    setItems(newItems);
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


export default App;
