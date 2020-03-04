/* Import module */
import React, { Component } from 'react';

/* Exportation de la classe ListeUser */
export default class ListeUser extends Component {
  state = {
    post: {},
    isLoaded:false
  }

  // méthode appelé lorsque le composant est monté
  componentDidMount() {
    fetch('https://reqres.in/api/users?page=2')
    .then((reponse) => {
      return reponse.json()
    })
    .then((result) => {
      setTimeout(() => {
        this.setState({
          // permet la conversation en un tableau de donner pour executer la fonction map
          post: Array.from(result.data),
          isLoaded:true
        })
        //console.log(this.state.post);
      }, 1500); 
    })
  }

  // Rendu du composant ListeUser
  render () {
    var {isLoaded, post} = this.state;

    // test si les données sont chargées
    if(!isLoaded) {
      return <div>Chargement...</div>
    } else {
      return (
        <div className="App">
          <h1>Liste des utilisateurs</h1>
            <div className="container">
                { post.map(item => (
                    <div className="card" key={item.id}>
                        <div>
                            <img className="card-avatar" src={item.avatar} alt={"Avatar de " + item.first_name + " " + item.last_name}/> 
                            <div className="card-info">
                            <p>{item.first_name} {item.last_name} </p>
                            <br/>
                            <p>{item.email}</p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>    
        </div>
      );
    }
    
  }
}

