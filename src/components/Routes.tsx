import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Home, WrongPage } from "pages/";
import Login from '../pages/Login/index'

const Routes = () => {
    const location = useLocation();

    return <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route exact component={WrongPage} />
    </Switch>
}

export default Routes;