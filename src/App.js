/* Import module */
import React, { Component } from 'react';

/* CSS */
import './css/App.css';

/* Components */
import Rout from './Components/Router';

class App extends Component {
  state = {
    isLogin: false
  } 
  render () {
    var {isLogin} = this.state;
    if(this.props.path === "/listuser") {
      isLogin = true;
    }
    return  (
      <div className="App">    
        <div>
          {isLogin ? 
          <div></div> :
          <ul>
            <li><a href="/login">Se connecter</a></li>
            <li><a href="/register">S'inscrire</a></li> 
          </ul>
          }
        </div>
        {<Rout/>/*<li><a href="/listuser">Liste des utilisateurs</a></li>*/}     
        
      </div>   
    )
  }
}

/* Exportation de la classe App*/
export default App
