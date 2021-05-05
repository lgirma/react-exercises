import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import {AuthLayout} from "./auth/AuthLayout";
import {POSLayout} from "./pos/POSLayout";
import {PageNotFound} from "./common/PageNotFound";


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/auth">Auth</Link>
                        </li>
                        <li>
                            <Link to="/pos">Point-of-Sale</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/auth">
                        <AuthLayout />
                    </Route>
                    <Route path="/pos">
                        <POSLayout />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
