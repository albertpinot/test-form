/* Import module */
import React, { Component } from 'react';

/* CSS */
import './css/App.css';

/* Components */
import Rout from './Components/Router';

class App extends Component {
  render () {
    return  (
      <div className="App">     
        <Rout />  
      </div>   
    )
  }
}

/* Exportation de la classe App*/
export default App
