import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, WrongPage } from "pages/";
import Login from '../pages/Login/index'
import { useToken } from '../utils/hooks/general'


const Routes = () => {
    const { token, setToken } = useToken();

    if (!token) return <Login setToken={setToken} />

    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route exact component={WrongPage} />
        </Switch>
    )
}


export default Routes;