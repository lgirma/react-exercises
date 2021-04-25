export enum EditorMode {
    NONE, EDITING, CREATING
}

export interface AppState {
    mode: EditorMode,
    selectedId: number | null,
    data: Contact[]
}

export interface Contact {
    id: number, name: string, phone: string, email: string
}