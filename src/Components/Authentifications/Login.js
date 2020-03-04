/* Import module */
import React, { Component } from 'react';

/* CSS */
//import '../../css/Login.css';

/* Exportation de la classe login */
export default class Login extends Component {
  // Rendu du composant Login
  state = {
    email: "",
    password: ""
  }
  render () {
    return (
      <div className="login">
        <h1>Se connecter</h1>
        <form>
          <div className="container-form">
            <label htmlFor="email" >Email</label>
            <br/>
            <input 
              id="email"
              type="email"
              name="email"
              placeholder="Entrez votre email..."
              className="m-b-m"
              required
            />
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input 
              id="password"
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe..."
              required
            />
            <br/>
            <input 
              type="button"
              name="valider"
              value="Se connecter"
              className="m-t-l m-b-m"
            />
            <br/>
          </div>
        </form>
        <a href="/register">Vous n'avez pas de compte ?</a>
      </div>
    );
  }
}


