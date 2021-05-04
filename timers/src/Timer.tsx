import React, { useEffect, useState } from 'react'

export interface TimerProps {
    name: string
    totalMs: number
}

export const Timer = function({name, totalMs}: TimerProps) {
    const [ms, setMs] = useState(totalMs)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (started && ms > 0) {
            setTimeout(() => {
                setMs(ms - 100);
            }, 100);
        }

    }, [ms, started])

    return <div>
        <div>{name}</div>
        <div style={{fontSize: '2em'}}>
            {(ms / 1000).toFixed(1)}
        </div>

        <button onClick={e => setStarted(!started)}>{started ? '\u23F8' : '\u23F5'}</button>
        <button onClick={e => {setMs(totalMs); setStarted(false)}}>{'\u23F9'}</button>
    </div>
}