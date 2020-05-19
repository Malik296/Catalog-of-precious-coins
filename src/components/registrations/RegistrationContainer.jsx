import React, { Component } from 'react';
import Style from './registration.module.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class RegistrationContainer extends Component {
    state = {
        active: false
    }

    chanceActiveHandler = (bool) => {
        this.setState({active: bool});
    }
    render() {
        const active = this.state.active;
        console.log(active);
        return (
            <div className={Style.registrationСontainer}>
                <div className={Style.registrationSection}>
                    <div className={Style.navDiv}>
                        <ul>
                            <li className={active ? Style.active : null} onClick={() => this.chanceActiveHandler(true)}>SIGN UP</li>
                            <li className={!active ? Style.active : null} onClick={() => this.chanceActiveHandler(false)}>SIGN IN</li>
                        </ul>
                    </div>
                    {!active ? <SignIn /> : <SignUp />}
                </div>
            </div>
        );
    }
}