import React, { Component } from 'react';
import Style from './registration.module.scss';

export default class SignIn extends Component {
    sendSignInForm = (event) => {
        event.preventDefault();
    }
    render() {
        return(
            <form onSubmit={this.sendSignInForm}>
               <div>
                    <input type="text" placeholder="Login" />
                </div>
                <div>
                    <input type="password" placeholder="Password"/>
                </div>

                <div>
                    <button>SIGN IN</button>
                </div>
            </form>
        );
    }
}