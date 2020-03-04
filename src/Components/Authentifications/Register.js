/* Import module */
import React, { Component } from 'react';

/* CSS */
//import '../../css/Register.css';

class Register extends Component {
  // Rendu du composant Register
  render () {
      return (
        <div className="register">
          <h1>Register</h1>
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
              <label htmlFor="password" >Mot de passe</label>
              <br/>
              <input 
                className="m-b-m"
                id="password"
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe..."
                required
              />
              <br/>
              <label htmlFor="password_confirm" >Confirmation du mot de passe</label>
              <br/>
              <input 
                id="password_confirm"
                type="password"
                name="password_confirm"
                placeholder="Confirmez votre mot de passe..."
                required
              />
              <br/>
              <input 
                type="submit"
                name="valider"
                value="S'inscrire"
                className="m-t-l m-b-m"
              />
              <br/>
            </div> 
          </form>
          <a href="/login">Vous avez déjà un compte ?</a>
        </div>
      );
    }
}

/* Exportation de la classe Register */
export default Register