import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import './App.css'
import {AuthLayout} from "./auth/AuthLayout";
import {POSLayout} from "./pos/POSLayout";
import {ChakraProvider} from "@chakra-ui/react"
import {ErrorPagesLayout} from "./common/ErrorPagesLayout";
import {ConfigLayout} from "./config/ConfigLayout";
import {LoginHandler, LogoutHandler, Nullable, User} from "./Types";


function App() {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || 'null') as Nullable<User>)
    const history = useHistory();

    const loginHandler: LoginHandler = (user) => {
        setCurrentUser(user)
        localStorage.setItem('currentUser', JSON.stringify(user))
        //history.replace('/pos')
    }

    const logoutHandler: LogoutHandler = () => {
        setCurrentUser(null)
        localStorage.setItem('currentUser', 'null')
        //history.push("/auth")
    }

    return (
        <Router>
            <ChakraProvider>
                <Switch>
                    <Route exact path={["/", "/auth"]} >
                        {
                            currentUser == null
                                ? <AuthLayout loginHandler={loginHandler}/>
                                : <Redirect to="/pos" />
                        }
                    </Route>
                    <Route path="/pos">
                        {
                            currentUser == null
                                ? <Redirect to="/auth" />
                                : <POSLayout logoutHandler={logoutHandler} />
                        }
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
    )
}

export default App
