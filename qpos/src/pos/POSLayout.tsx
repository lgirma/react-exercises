import { Button } from "@chakra-ui/react";
import React, {useContext} from "react";
import {SecurityContext, LogoutHandler} from "../Types";


export const POSLayout = () => {

    const securityCtx = useContext(SecurityContext);

    return <div>
        POS Page. Welcome, {securityCtx.user?.fullName}
        <div>
            <Button onClick={e => securityCtx.logout()}>Logout</Button>
        </div>
    </div>
}