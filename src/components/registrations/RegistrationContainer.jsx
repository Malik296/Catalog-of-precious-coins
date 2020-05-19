import React, { Component } from 'react';
import Style from './registration.module.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class RegistrationContainer extends Component {
    state = {
        active: false
    }

    componentDidMount() {
        let active = false;
        if(this.props.signInOrSignUp === 'signUp') {
            active = true;
        }

        this.setState({active: active})
    }

    closeButtonHandler = () => {
        this.props.closeRegisterPopup();
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
                    <div className={Style.closeButtonDiv}><span onClick={this.closeButtonHandler}>&#10005;</span></div>
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