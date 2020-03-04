/* Import module */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* CSS */
import './css/App.css';

/* Components */
import ListeUser from './Components/ListeUser';
import Login from './Components/Authentifications/Login';
import Register from './Components/Authentifications/Register';

/* Exportation de la classe App*/
export default class App extends Component {
  render () {
      return  (
        <div className="App">    
          <div>
            <ul>
              <li><a href="/login">Se connecter</a></li>
              <li><a href="/register">S'inscrire</a></li>
            </ul>
          </div>
          {/* Route */}     
          <Router>
            <Switch>
                <Route path="/login" component={Login(isLogin)} />
                <Route path="/register" component={Register} />
            </Switch>
          </Router>   
        </div>   
      )
    } 
  }
}


