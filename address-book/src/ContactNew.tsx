import React from 'react'
import { useState } from "react"
import { Contact } from "./Types"

export interface ContactNewProps {
    onCreate: (c: Contact) => void
    onCancel: () => void
}

export const ContactNew = ({onCreate, onCancel}: ContactNewProps) => {

    const [contact, setContact] = useState({name: '', phone: '', email: ''} as Contact)

    return <form onSubmit={e => {onCreate(contact); e.preventDefault()}}>
        <div>
            <label>Name: <input value={contact.name} onChange={e => setContact({...contact, name: e.target.value})}/></label>
        </div>
        <div>
            <label>Email: <input value={contact.email} onChange={e => setContact({...contact, email: e.target.value})}/></label>
        </div>
        <div>
            <label>Phone: <input value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})}/></label>
        </div>
        <div>
            <button type="submit">Create</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </form>
}