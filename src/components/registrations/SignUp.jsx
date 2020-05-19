import React, { Component } from 'react';

export default class SignUp extends Component {
    state = {
        login: '',
        password: '',
        repeatPassword: '',

        checkLogin: false,
        checkPassword: false,
        checkRepeatPassword: false,
    }

    sendSignUpForm = (event) => {
        event.preventDefault();

    }

    loginChanceHandler = (event) => {
        let val = event.target.value.split(' ').join('');
        // if()
        this.setState({ login: val })
    }

    passwordChanceHandler = (event) => {

    }

    repeatPasswordChanceHandler = (event) => {

    }
    render() {
        const { checkLogin, checkPassword, checkRepeatPassword } = this.state;

        let buttonActive = false;

        if (checkLogin && checkPassword && checkRepeatPassword) {
            buttonActive = true;
        }
            return (
                <form onSubmit={this.sendSignUpForm}>
                    <div>
                        <input type="text" placeholder="Login"
                            onChange={this.loginChanceHandler}
                            value={this.state.login} />
                    </div>
                    {/* <div>
                    <input type="email" placeholder="Email"
                        onChange={this.loginChanceHandler}
                        value={this.state.login} />
                </div> */}
                    {/* <hr/> */}
                    <div>
                        <input type="password" placeholder="Password"
                            onChange={this.passwordChanceHandler}
                            value={this.state.password} />
                    </div>
                    <div>
                        <input type="password" placeholder="Repeat password"
                            onChange={this.repeatPasswordChanceHandler}
                            value={this.state.repeatPassword} />
                    </div>

                    <div>
                        <button disabled={!buttonActive}>CREATE MY ACCOUNT</button>
                    </div>
                </form>
            );
    }
}