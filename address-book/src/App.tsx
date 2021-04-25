import React, { useEffect, useState } from 'react';
import './App.css';
import { Editor } from './Editor';
import { List } from './List';
import { AppState, EditorMode, Contact } from './Types';


function App() {

  const [state, setState] = useState({
    mode: EditorMode.NONE,
    selectedId: null,
    data: []
  } as AppState)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/list');
      setState({...state, data: await response.json()})
    }

    fetchData()
  })

  const onSelect = (id: number) => {
    setState({...state, selectedId: id})
  }

  const onUpdate = (c: Contact) => {
    setState({...state, selectedId: id})
  }

  return (
    <div className="App">
      <List data={state.data} onSelect={onSelect} />
      <Editor selectedId={state.selectedId} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
