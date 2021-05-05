import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css'
import {AuthLayout} from "./auth/AuthLayout";
import {POSLayout} from "./pos/POSLayout";
import {ChakraProvider} from "@chakra-ui/react"
import {ErrorPagesLayout} from "./common/ErrorPagesLayout";
import {ConfigLayout} from "./config/ConfigLayout";
import {LoginHandler, LogoutHandler, Nullable, User, SecurityContext, GlobalContextProps} from "./Types";

function App() {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || 'null') as Nullable<User>)

    const InitialGlobalCtx: GlobalContextProps = {
        user: currentUser,
        login: u => {
            setCurrentUser(u)
            localStorage.setItem('currentUser', JSON.stringify(u))
        },
        logout: () => {
            setCurrentUser(null)
            localStorage.setItem('currentUser', 'null')
        }
    }

    return (
        <SecurityContext.Provider value={InitialGlobalCtx}>
            <Router>
                <ChakraProvider>
                    <Switch>
                        <Route exact path={["/", "/auth"]} >
                            <SecurityContext.Consumer>
                                {ctx => (
                                    ctx.user == null
                                        ? <AuthLayout />
                                        : <Redirect to="/pos" />
                                )}
                            </SecurityContext.Consumer>
                        </Route>
                        <Route path="/pos">
                            <SecurityContext.Consumer>
                                {ctx => (
                                    ctx.user == null
                                        ? <Redirect to="/auth" />
                                        : <POSLayout />
                                )}
                            </SecurityContext.Consumer>
                        </Route>
                        <Route path="/config">
                            {
                                currentUser == null
                                    ? <Redirect to="/auth" />
                                    : <ConfigLayout />
                            }
                        </Route>
                        <Route path="*">
                            <ErrorPagesLayout />
                        </Route>
                    </Switch>
                </ChakraProvider>
            </Router>
        </SecurityContext.Provider>
    )
}

export default App
