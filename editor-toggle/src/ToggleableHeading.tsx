import React from 'react'
import { useState } from "react"
import { ToggleableHeadingProps } from './Types'

export const ToggleableHeading = ({content, onUpdate}: ToggleableHeadingProps) => {

    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(content)

    return isEditing
        ? <h1>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={e => {onUpdate(text); setIsEditing(false)}}>Update</button>
            <button onClick={e => {setText(content); setIsEditing(false)}}>Cancel</button>
        </h1>
        : <h1>
            {content} <button onClick={e => setIsEditing(true)}>Edit</button>
        </h1>
    
}