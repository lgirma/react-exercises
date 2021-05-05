import React from "react";
import {ChakraProvider} from "@chakra-ui/react"
import {Login} from "./Login";

export const AuthLayout = () => {

    return <ChakraProvider>
        <Login />
    </ChakraProvider>
}