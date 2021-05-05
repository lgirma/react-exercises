import {Alert, AlertDescription, AlertIcon, AlertTitle, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
    return (
        <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
        >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
                Page Not Found
            </AlertTitle>
            <AlertDescription maxWidth="sm">
                Try going home and look for the page you want.
                <div>
                    <Link to="/">Go back home</Link>
                </div>
            </AlertDescription>
        </Alert>
    )
}