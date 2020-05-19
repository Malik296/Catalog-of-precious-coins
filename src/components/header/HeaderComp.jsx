import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss'
import logo from '../../img/header/user.svg'
import shoppingCart from '../../img/header/shopping-cart.svg'
import { RegisterComp } from './RegisterComp';
import RegistrationContainer from '../registrations/RegistrationContainer';

export class HeaderComp extends Component {
    state = {
        myProfilePopup: false,

        showRegisterPopup: false,
        signInOrSignUp: '',
    }

    onClickHandler = (value) => {
        this.setState({
            myProfilePopup: false,
            showRegisterPopup: true,
            signInOrSignUp: value,
        })
    }

    closeRegisterPopup = () => {
        this.setState({showRegisterPopup: false});
    }

    showPopup = () => {
        this.setState({myProfilePopup: true});
    }

    hiddenPopup = () => {
        this.setState({myProfilePopup: false});
    }

    render() {
        const {myProfilePopup} = this.state;
        return (
            <div className={Style.headerContainer}>
                <div className={Style.logoDiv}>
                    <h2>Some Logo</h2>
                </div>
                <div className={Style.cartDiv}>
                    <div className={Style.imgCont}>
                        <img src={shoppingCart} alt="Cart logo" />
                        <div className={Style.countDiv}>
                            <span>20</span>
                        </div>
                    </div>
                </div>
                <div className={Style.myProfile} onMouseOver={this.showPopup} onMouseLeave={this.hiddenPopup}>
                    <img src={logo} alt="User logo" />
                    <span>My profile</span>
                    <span>&darr;</span>

                    {myProfilePopup ? <RegisterComp onClickHandler={this.onClickHandler}/> : null}                    
                </div>
                {this.state.showRegisterPopup ? <RegistrationContainer signInOrSignUp={this.state.signInOrSignUp} closeRegisterPopup={this.closeRegisterPopup} /> : null}
            </div>
        );
    }
}