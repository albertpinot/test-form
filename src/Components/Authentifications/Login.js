/* Import module */
import React, { Component } from 'react';
import * as EmailValidator from 'email-validator';

class Login extends Component {
  // Rendu du composant Login
  state = {
      email: "",
      password:"",
  } 
  change = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  // Si l'utilisateur valide le formulaire on execute cette methode
  submit = (e) => {
    e.preventDefault();
    //console.log(this.state)
   // console.log(this.props.isLogin)
    if(this.state.email && this.state.password) { // test si les champs son vide
      if(this.state.password.length >= 8) { // test la taille du password
        if (EmailValidator.validate(this.state.email)) { // test si l'email est valide 
          //Permet la redirection
          return this.props.history.push('/listuser');
        } else {
            return alert("Votre adresse mail n'est pas valide");
        }
      } else {
          return alert("Votre mot de passe doit au moins faire 8 caractères");
      }
    } else {
        return alert("Veuillez remplir tout les champs");
    }
  }
  render () {
    return (
      <div> 
        <div className="login">
          <h1>Se connecter</h1>
          <form onSubmit={this.submit}>
            <div className="container-form">
              <label htmlFor="email" >Email</label>
              <br/>
              <input 
                id="email"
                type="email"
                name="email"
                placeholder="Entrez votre email..."
                className="m-b-m"
                onChange={this.change}
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
                onChange={this.change}
                required
              />
              <br/>
              <input 
                type="submit"
                name="valider"
                value="Se connecter"
                className="m-t-l m-b-m"
              />
              <br/>
            </div>
          </form>
          <a href="/register">Vous n'avez pas de compte ?</a>
        </div>
      </div>
    );
  }
}

/* Exportation de la classe login */
export default Login