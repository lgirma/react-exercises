export interface User {
    email: string
    fullName: string
}

export type Nullable<T> = T|null

export type LoginHandler = (user: User) => void

export type LogoutHandler = () => void