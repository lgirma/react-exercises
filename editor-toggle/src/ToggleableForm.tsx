import { useState } from "react"
import { ToggleableFormProps } from "./Types"


export const ToggleableForm = ({data, onUpdate}: ToggleableFormProps) => {

    const [isEditing, setIsEditing] = useState(false)
    const [localData, setLocalData] = useState({...data})

    const onChangeIsEditing = (val: boolean) => {
        setIsEditing(val)
        setLocalData({...data})
    }

    return <div>
        {isEditing 
            ? <form onSubmit={e => {onUpdate(localData); e.preventDefault(); onChangeIsEditing(false)}}>
                <div><label>Name <input value={localData.name} onChange={e => setLocalData({...localData, name: e.target.value})}/></label></div>
                <div><label>Email <input value={localData.email} onChange={e => setLocalData({...localData, email: e.target.value})}/></label></div>
                <div>
                    <input type="submit" value="Update" />
                    <button onClick={e => onChangeIsEditing(false)}>Cancel</button>
                </div>
            </form>

            : <div>
                <div>Name: {data.name}</div>
                <div>Email: {data.email}</div>
                <div><button onClick={e => onChangeIsEditing(true)}>Edit</button></div>
            </div>
        }
    </div>
}