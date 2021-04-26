import React, { useState } from 'react';

export interface CountProps {
    count: number,
    incCount: () => void,
    decCount: () => void,
    name: string
}

export const Counter = ({count, incCount, decCount, name}: CountProps) => {
    return <div>
        <h1>Counter</h1>
        <button onClick={incCount}>+</button>
        <span>{count}</span>
        <button onClick={decCount}>-</button>
        <div>
            {name} is counting...
        </div>
    </div>
}

export const Greeter = ({name, setName}: {name:string, setName: any}) => {
    const [message, setMessage] = useState('Hello, there.');

    return <div>
        <h1>Greeter</h1>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={() => setMessage(`Hello, ${name}`)}>Greet</button>
        <span>{message}</span>
    </div>
}