import { Contact } from "./Types";

export interface ListProps {
    data: Contact[],
    onSelect: (id: number) => void
}

export const List = ({data, onSelect}: ListProps) => {
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
            {data.map(c => <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.email}</td>
                <td><span onClick={e => onSelect(c.id)}>Edit</span></td>
            </tr>)}
        </tbody>
    </table>
}