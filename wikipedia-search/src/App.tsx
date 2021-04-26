import React, { useState } from 'react';
import './App.css';
import { WikiResults } from './WikiFind';

function App() {
  const [searchKey, setSearchKey] = useState('');
  return (
    <div className="App">
      <div>
        <input placeholder="Find..." value={searchKey} onChange={e => setSearchKey(e.target.value)} />
      </div>
      <WikiResults searchKey={searchKey}/>
    </div>
  );
}

export default App;
