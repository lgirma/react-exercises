import React, { useState } from 'react';
import './App.css';
import { Counter, Greeter } from './Counter';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className="App">
      <Counter count={count} name={name}
        incCount={() => setCount(count+1)} 
        decCount={() => setCount(count-1)} />

      <Greeter name={name} setName={setName} />
    </div>
  );
}

export default App;
