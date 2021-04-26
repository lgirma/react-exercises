import React from 'react'
import { useState } from "react"
import { Contact } from "./Types"

export interface ContactEditProps {
    contact: Contact,
    onUpdate: (c: Contact) => void
    onCancelEdit: () => void
}

export const ContactEdit = ({contact, onUpdate, onCancelEdit}: ContactEditProps) => {

    const [clone, setClone] = useState(contact)

    return <form onSubmit={e => {onUpdate(clone); e.preventDefault()}}>
        <div>
            <label>Name: <input value={clone.name} onChange={e => setClone({...clone, name: e.target.value})}/></label>
        </div>
        <div>
            <label>Email: <input value={clone.email} onChange={e => setClone({...clone, email: e.target.value})}/></label>
        </div>
        <div>
            <label>Phone: <input value={clone.phone} onChange={e => setClone({...clone, phone: e.target.value})}/></label>
        </div>
        <div>
            <button type="submit">Update</button>
            <button onClick={onCancelEdit}>Cancel</button>
        </div>
    </form>
}