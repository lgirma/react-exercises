import {createContext} from "react";

export interface User {
    email: string
    fullName: string
}

export type Nullable<T> = T|null

export type LoginHandler = (user: User) => void

export type LogoutHandler = () => void

export interface GlobalContextProps {
    user: Nullable<User>
    logout: LogoutHandler
    login: LoginHandler
}

export const SecurityContext = createContext({} as GlobalContextProps)