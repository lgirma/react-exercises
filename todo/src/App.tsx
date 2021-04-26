import React, { useState } from 'react';
import {TodoItem, Todo} from './TodoList';
import './App.css';

function App() {

  const [items, setItems] = useState([] as TodoItem[]);
  const [showDone, setShowDone] = useState(true);

  return (
    <div className="App">
      <label>
        <input checked={showDone} type="checkbox" onChange={e => setShowDone(!showDone)} />
        Show Done?
      </label>
      <hr />
      <Todo items={items} showDone={showDone} setShowDone={setShowDone} setItems={setItems} />
    </div>
  );
}

export default App;
