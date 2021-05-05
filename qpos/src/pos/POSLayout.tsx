import { Button } from "@chakra-ui/react";
import React from "react";
import {LogoutHandler} from "../Types";

export interface POSLayoutProps {
    logoutHandler: LogoutHandler
}

export const POSLayout = ({logoutHandler}: POSLayoutProps) => {
    return <div>
        POS Page
        <div>
            <Button onClick={logoutHandler}>Logout</Button>
        </div>
    </div>
}