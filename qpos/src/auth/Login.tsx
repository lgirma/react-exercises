import React from "react";
import {Button, Flex, Heading, Input, useColorMode} from "@chakra-ui/react";

export const Login = () => {
    const {toggleColorMode} = useColorMode();
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder="user@mail.com" variant="filled" mb={3} type="email" />
                <Input placeholder="*************" variant="filled" mb={6} type="password" />
                <Button mb={6} colorScheme="teal">Log in</Button>
                <Button onClick={toggleColorMode}>Toggle Dark/Light</Button>
            </Flex>
        </Flex>
    )
}