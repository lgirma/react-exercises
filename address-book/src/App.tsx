import { NONAME } from 'node:dns'
import React, { useEffect, useState } from 'react'
import { ContactEdit } from './ContactEdit'
import { ContactList } from './ContactList'
import { ContactNew } from './ContactNew'
import { Contact } from './Types'

enum Forms {NONE, EDIT, CREATE}

export interface AppState {
    list: Contact[],
    filterKey: string,
    selected: Contact | null
    forms: Forms
}

const initialState: AppState = {
    list: [],
    filterKey: '',
    selected: null,
    forms: Forms.NONE
}

function getFilteredList(list: Contact[], filterKey: string) {
    let key = filterKey.toUpperCase()
    return list.filter(c => !filterKey.length || 
        c.name.toUpperCase().indexOf(key) > -1 ||
        c.email.toUpperCase().indexOf(key) > -1)
}

const App = () => {
    const [state, setState] = useState(initialState)

    const onEdit = (c: Contact) => {setState({...state, selected: c, forms: Forms.EDIT})}
    const onCancelEdit = () => {setState({...state, selected: null, forms: Forms.NONE})}
    const onUpdate = (c: Contact) => {
        fetch(`http://localhost:8080/update/${c.id}`, {
            method: 'POST', body: JSON.stringify(c),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => fetchList())
        .then(res => onCancelEdit())

    }
    const onNew = () => {setState({...state, forms: Forms.CREATE, selected: null})}
    const onCreate = (c: Contact) => {
        fetch('http://localhost:8080/create', {
            method: 'PUT', body: JSON.stringify(c),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => fetchList())
        .then(res => onCancelEdit())
    }

    const fetchList = async () => {
        const res = await fetch('http://localhost:8080/list')
        setState({...state, list: await res.json()})
    }

    useEffect(() => {fetchList()}, [])

    let editor;
    if (state.selected != null) {
        editor = <ContactEdit contact={state.selected} onUpdate={onUpdate} onCancelEdit={onCancelEdit} />
    } else if (state.forms == Forms.CREATE) {
        editor = <ContactNew onCreate={onCreate} onCancel={onCancelEdit} />
    } else {
        editor = <div>
            <input type="search" placeholder="Find..." value={state.filterKey} onChange={e => setState({...state, filterKey: e.target.value})} />
            <ContactList list={getFilteredList(state.list, state.filterKey)} onEdit={onEdit} />
            <button onClick={e => fetchList()}>Refresh</button>
        </div>
    }

    return <div>
        <h2>Contacts</h2>
        <hr/>
        <button onClick={e => onNew()}>New Contact...</button>

        {editor}
        
    </div>
}

export default App