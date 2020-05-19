import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss'
import logo from '../../img/header/user.svg'
import shoppingCart from '../../img/header/shopping-cart.svg'
import { RegisterComp } from './RegisterComp';

export class HeaderComp extends Component {
    state = {
        registerPopup: false,
    }

    showPopup = () => {
        this.setState({registerPopup: true});
    }

    hiddenPopup = () => {
        this.setState({registerPopup: false});
    }

    render() {
        const showPopup = this.state.registerPopup;
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

                    {showPopup ? <RegisterComp /> : null}                    
                </div>

            </div>
        );
    }
}