export interface Contact {
    id: number
    name: string
    email: string
    phone: string
}

export interface AppState {
    list: Contact[],
    filterKey: string
}