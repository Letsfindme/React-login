import React from "react";
import "./style.css";
import logo from "./duck.0.png";
import DatePicker from "react-datepicker";
import { InputComponent } from "../_components/InputComponent";
import "react-datepicker/dist/react-datepicker.css";
import { userService } from "../_services";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            submitted: false,
            loading: false,
            error: "",
            isHidden: false,
            redClass: "clear",
            startDate: new Date(),
            firstName: "",
            lastName: "",
            birthDate: ""
        }
    }

    handleChange2(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { firstName, lastName, username, password } = this.state;

        userService.register(
            firstName,
            lastName,
            "1999-12-02",
            username,
            password)
        this.setState({
            submitted: true,
            loading: true,
            redClass: "clearRed"
        })
        setTimeout(() => {
            this.setState({
                username: "",
                password: "",
                submitted: false,
                loading: false,
                error: "",
                redClass: 'clear'
            });
        }, 2000);
    }

    render() {
        let redClass = this.state.redClass
        let Childe = () => (
            <div>
                <img src={logo} />
            </div>
        )
        return (
            <div className="register signup-form">
                <div className={redClass}></div>

                <form className="bg-light">
                    <h2>Register</h2>
                    <p class="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div class="w-100 m-2"></div>
                    <div className="row justify-content-center">
                        <InputComponent
                            type={'text'}
                            className={"form-control"}
                            name={"firstName"}
                            value={this.state.firstName}
                            label={"First Name"}
                            submitted={this.state.submitted}
                            handleChange2={(event) => this.handleChange2(event)} />
                        <div class="w-100"></div>
                        <InputComponent
                            type={'text'}
                            className={"form-control"}
                            name={"lastName"}
                            value={this.state.lastName}
                            label={"Last Name"}
                            submitted={this.state.submitted}
                            handleChange2={(event) => this.handleChange2(event)} />
                        <div class="w-100"></div>
                        <InputComponent
                            type={'text'}
                            className={"form-control"}
                            name={"username"}
                            value={this.state.username}
                            label={"User Name"}
                            submitted={this.state.submitted}
                            handleChange2={(event) => this.handleChange2(event)} />
                        <div class="w-100"></div>
                        <InputComponent
                            type={'password'}
                            className={"form-control"}
                            name={"password"}
                            value={this.state.password}
                            label={"Password"}
                            submitted={this.state.submitted}
                            handleChange2={(event) => this.handleChange2(event)} />
                        <div class="w-100"></div>
                        <InputComponent
                            type={'password'}
                            className={"form-control"}
                            name={"password"}
                            label={"Password Confirm"}
                            submitted={this.state.submitted}
                            handleChange2={(event) => this.handleChange2(event)} />
                        <div class="w-100"></div>
                    </div>
                    <div className="form-row justify-content-center">
                        <InputComponent
                            type={'date'}
                            className={"form-control"}
                            name={"birthDate"}
                            value={this.state.birthDate}
                            label={"Birth Day"}
                            submitted={this.state.submitted}
                            handleSubmit={(event) => this.handleSubmit(event)} />
                    </div>
                    <div class="w-100"></div>
                    <div class="form-group">
                        <label class="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                    </div>
                    <div class="w-100"></div>
                    <div className="text-center m-3">
                        <button className="btn btn-success btn-lg btn-block"
                            onClick={(event) => this.handleSubmit(event)}>Register Now
                        </button>
                    </div>
                </form>
                <div class="text-center">Already have an account? <a href="#">Sign in</a></div>
                <div>
                    {this.state.isHidden && <Childe />}
                </div>


            </div >
        )
    }

}

export { RegisterPage };