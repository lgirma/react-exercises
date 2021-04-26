import React, { useEffect, useState } from 'react'
import { ContactList } from './ContactList'
import { AppState } from './Types'

const initialState: AppState = {
    list: [],
    filterKey: ''
}

const App = () => {
    const [state, setState] = useState(initialState)

    const fetchList = async () => {
        const res = await fetch('http://localhost:8080/list')
        setState({...state, list: await res.json()})
    }
    fetchList()
    useEffect(() => {
        fetchList()
    }, [setState])

    return <div>
        <h2>Contacts</h2>
        <input type="search" placeholder="Find..." value={state.filterKey} onChange={e => setState({...state, filterKey: e.target.value})} />
        <hr/>

        <ContactList list={state.list.filter(c => !state.filterKey.length || c.name.indexOf(state.filterKey) > -1)} />
    </div>
}

export default App