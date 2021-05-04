import React, { useState } from 'react'
import './App.css'
import { Timer } from './Timer'

function App() {
  const [timers, setTimers] = useState([0])

  const addTimerHandler = () => {
    setTimers([...timers, timers.length])
  }

  const removeTimerHandler = (i: number) => {
    setTimers(timers.filter(t => t != i))
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          timers.map((t, i) => {
            return <div key={i} style={{border: '1px solid yellow', margin: '5px', padding: '5px'}}>
              <Timer name={`Timer ${i+1}`} totalMs={60*1000} />
              <button onClick={e => removeTimerHandler(i)}>&times; Remove Timer</button>
            </div>
          })
        }
        
        <button onClick={e => addTimerHandler()}>+ Add Timer</button>
      </header>
    </div>
  )
}

export default App
