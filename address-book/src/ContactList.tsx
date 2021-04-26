import React from 'react'
import { Contact } from "./Types";

export interface ContactListProps {
    list: Contact[]
    onEdit: (c: Contact) => void
}

export const ContactList = ({list, onEdit}: ContactListProps) => {
    return <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {list.map(c => <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td><a href={`mailto:${c.email}`}>{c.email}</a></td>
                <td>
                    <button onClick={e => onEdit(c)}>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>)}
        </tbody>
    </table>
}