import React, { useEffect, useState } from "react";
import { Contact } from "./Types"

export interface EditorProps {
    selectedId: number | null,
    onUpdate: (c: Contact) => void
}

export const Editor = ({selectedId, onUpdate}: EditorProps) => {

    const [contact, setContact] = useState(null as Contact|null)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (contact != null)
            onUpdate(contact)
        e.preventDefault()
    }

    useEffect(() => {
        const fetchData = async () => {
            if (selectedId == null)
                setContact(null)
            else {
                const response = await fetch(`http://localhost:8080/${selectedId}`);
                setContact(await response.json())                
            }
        }
      
        fetchData()
    })

    return selectedId == null ? <></>
    : <div>
        <form onSubmit={e => onSubmit(e)}>
            <div>
                <label>Name: <input value={contact?.name} /></label>
            </div>
            <div>
                <label>Phone: <input value={contact?.phone} /></label>
            </div>
            <div>
                <label>Email: <input value={contact?.email} /></label>
            </div>
            <div>
                <input value="Update" type="submit"/>
            </div>
        </form>
    </div>
}