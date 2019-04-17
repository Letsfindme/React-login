import React from "react";

import {userService} from "../_services";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: "",
            password: "",
            submitted: false,
            loading: false,
            error: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    componentDidMount() {
        console.log( " component did mount actually ");
        let cars = ["Saab", "Volvo", "BMW"];

        let fadi = {
            'key': "hi",
            'key2': "hello"
        }
    }

    handleUsernameChange(e) {
        //console.log(e.target.name, e.target.value);
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e){
        //console.log("password on change", e.target.value)
        this.setState({
            password: e.target.value
        })
    }

    handleChange (e) {
        const {name, value} = e.target;
        console.log(name, value);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {username, password} = this.state;
        //console.log('pass', this.state.password);
        console.log("username :", username);
        console.log("password :", password);
    }

    showName = (e) =>{
        e.preventDefault();
        const {username, password} = this.state;
        console.log("username :", username);
        console.log("password :", password);
    }

    render() {
        //console.log(this.state);
        const { username, password } = this.state;
        const hello = username;
        return (
            <React.Fragment>
                <h2>Login</h2>
                <p>{hello}</p>
                <form name="form" >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        //this.handelUsernameChange() execute this method directly
                        onChange={this.handleUsernameChange}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={this.handlePasswordChange}
                    />
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.showName}>Login</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }


}

export {LoginPage};
