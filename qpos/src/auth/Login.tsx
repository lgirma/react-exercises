import React, {useContext, useState} from "react";
import {Button, Heading, Input} from "@chakra-ui/react";
import {LoginHandler, SecurityContext} from "../Types";

export const Login = () => {

    const securityCtx = useContext(SecurityContext);
    const [loginData, setLoginData] = useState({email: '', password: ''})

    const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        securityCtx.login({email: loginData.email, fullName: loginData.email.replace(/@.*$/,"")})
        e.preventDefault();
    }

    return (
        <form onSubmit={e => loginSubmitHandler(e)}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder="user@mail.com" variant="filled" mb={3} type="email" required={true}
                value={loginData.email} onChange={e => setLoginData({...loginData, email: e.target.value})}/>
            <Input placeholder="*************" variant="filled" mb={6} type="password" required={true}
                value={loginData.password} onChange={e => setLoginData({...loginData, password: e.target.value})}/>
            <Button type="submit" mb={6} colorScheme="teal">Log in</Button>
        </form>
    )
}