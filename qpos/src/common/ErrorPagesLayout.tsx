import React from "react";
import {Flex} from "@chakra-ui/react";
import {PageNotFound} from "./PageNotFound";

export const ErrorPagesLayout = () => {
    return <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} rounded={6}>
            <PageNotFound />
        </Flex>
    </Flex>
}