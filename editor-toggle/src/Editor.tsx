import React, { useEffect, useState } from "react";

export interface EditorProps {
    content: string
    onUpdate: (c: string) => void
    onCancel: () => void
}

export const Editor = ({content, onUpdate, onCancel}: EditorProps) => {

    const [text, setText] = useState(content)

    return <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={e => onUpdate(text)}>Update</button>
        <button onClick={e => onCancel()}>Cance</button>
    </div>
}