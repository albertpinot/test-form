/* Import module */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import ListeUser from './ListeUser';
import Login from './Authentifications/Login';
import Register from './Authentifications/Register';

function Rout (){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/listuser" component={ListeUser} />
          </Switch>
        </Router>          
    )
}

export default Rout