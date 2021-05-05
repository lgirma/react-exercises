import React, {useState} from "react";
import {Button, Heading, Input} from "@chakra-ui/react";
import {LoginHandler} from "../Types";

export const Login = ({loginHandler}: {loginHandler: LoginHandler}) => {

    const [user, setUser] = useState({email: '', password: ''})

    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        loginHandler({email: user.email, fullName: user.email.replace(/@.*$/,"")})
        e.preventDefault();
    }

    return (
        <form onSubmit={e => loginSubmitHandler(e)}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="user@mail.com" variant="filled" mb={3} type="email" required={true}
                value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
            <Input placeholder="*************" variant="filled" mb={6} type="password" required={true}
                value={user.password} onChange={e => setUser({...user, password: e.target.value})}/>
            <Button type="submit" mb={6} colorScheme="teal">Log in</Button>
        </form>
    )
}