export interface AppState {
    title: string
    formData: FormData
}

export interface FormData {
    name: string
    email: string
} 

export interface ToggleableFormProps {
    data: FormData
    onUpdate: (d: FormData) => void
}

export interface ToggleableHeadingProps {
    content: string
    onUpdate: (c: string) => void
}