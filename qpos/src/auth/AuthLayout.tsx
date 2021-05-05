import React from "react";
import {Button, Flex, useColorMode} from "@chakra-ui/react"
import {Login} from "./Login";
import {LoginHandler} from "../Types";

export interface AuthLayoutProps {
    loginHandler: LoginHandler
}

export const AuthLayout = () => {
    const {toggleColorMode} = useColorMode();
    return <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} rounded={6}>
            <Login />
            <Button onClick={toggleColorMode}>Toggle Dark/Light</Button>
        </Flex>
    </Flex>
}