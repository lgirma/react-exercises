import { useState } from "react"

export interface TodoItem {
    task: string
    isDone: boolean
}

export interface TodoProps {
    items: TodoItem[]
    setItems: (itms: TodoItem[]) => void

    showDone: boolean
    setShowDone: (v: boolean) => void
}

export const Todo = ({items, showDone, setShowDone, setItems}: TodoProps) => {

    const [task, setTask] = useState('')

    return <div>
        <input placeholder="Task name..." value={task} onChange={e => setTask(e.target.value)} />
        <button onClick={e => {
            setItems([...items, {isDone: false, task}]);
            setTask('')
            }}>Add</button>

        <div>
            {items
            .filter(i => showDone || !i.isDone)
            .map(i => <div>
                <label>                    
                    <input type="checkbox" checked={i.isDone} onChange={e => setItems(items.map(it => i === it ? {...it, isDone: !it.isDone} : it))} />
                    <span style={i.isDone ? {textDecoration: 'strikethrough'} : {}}>{i.task}</span>
                </label>
                <span style={{cursor: 'pointer', color: 'red'}} onClick={e => setItems(items.filter(it => it !== i))} title="Delete">&times;</span>
            </div>)}
        </div>
    </div>
}