import React, { useEffect, useState } from 'react';
import './App.css';
import { Editor } from './Editor';
import { ToggleableForm } from './ToggleableForm';
import { ToggleableHeading } from './ToggleableHeading';
import { AppState, FormData } from './Types';


function App() {

  const [state, setState] = useState({
    title: 'Some title',
    formData: {name: 'Abe', email: 'abe@gmail.com'} as FormData
  } as AppState)

  return (
    <div className="App">
      <ToggleableHeading content={state.title} onUpdate={e => setState({...state, title: e})} />
      
      <h1>Toggle-able Form</h1>
      <ToggleableForm data={state.formData} onUpdate={fd => setState({...state, formData: fd})} />
    </div>
  );
}

export default App;
