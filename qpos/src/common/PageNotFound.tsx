import { ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";

export const PageNotFound = () => {
    return (
        <ChakraProvider>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" p={12} rounded={6}>
                    Page Not Found.
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}