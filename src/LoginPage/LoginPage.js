import React from "react";

import {userService} from "../_services";

class LoginPage extends React.Component { constructor(props) {
    super(props);

    // userService.logout();

    //J'initialise mon state.
    //Un state est un objet.
    this.state = {
        username: "",
        password: "",
        submitted: false,
        loading: false,
        error: ""
    };
}

    //Quand mon composant s'initialise
    componentDidMount() {
        console.log("Hey, my component is mounted");
    }

    //Quand on rentre des données dans mon input
    handleChange(event) {
        // On destructure event.target pour mettre les event.target.name dans la variable name
        // Pareil pour event.target.value dans la varible value
        const { name, value } = event.target;
        //Si name = username alors on modifie this.state.username
        //Si name = password alors on modifie this.state.password
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        //On prévent le button du form d'actualiser la page
        event.preventDefault();

        //On actualise notre state
        this.setState({
            submitted: true
        });

        //Si la valeur d'username & password est vide, on ne continue pas notre logique
        //return; fait en sorte de sortir de notre fonction

        if (!(this.state.username && this.state.password)) {
            console.log("return");
            return;
        }

        //On actualise notre state
        this.setState({
            loading: true
        });
        //On simule notre retour d'api en attendant 2 secondes
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 2000);
    }

    // La fonction render est appelé à chaque fois que le composant se met à jour
    render() {
        console.log("My component re-rendered");
        return (
            <React.Fragment>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={event => this.handleChange(event)}
                    />
                    {/* Conditional rendering avec deux conditions */}
                    {this.state.submitted && !this.state.username && (
                        <div className="error">Username is required</div>
                    )}
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={event => this.handleChange(event)}
                    />
                    {/* Conditional rendering avec deux conditions */}
                    {this.state.submitted && !this.state.password && (
                        <div className="error">Password is required</div>
                    )}
                    <div className="form-group">
                        <button
                            onClick={event => this.handleSubmit(event)}
                            className="btn btn-primary"
                        >
                            Login
                        </button>
                        {/* Conditional rendering avec deux conditions */}
                        {this.state.loading && this.state.submitted && <p>Loading</p>}
                    </div>
                </form>
            </React.Fragment>
        );
    }


}

export {LoginPage};
