import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss'

export class RegisterComp extends Component {
    render() {
        return (
            <div className={Style.registerPopup}>
                <div><p>Welcom to coins Site</p></div>
                <hr />
                <div className={Style.registerButtons}>
                    <button className={Style.sgnIn} onClick={() => this.props.onClickHandler('signUp')}>Sign up</button>
                    <button className={Style.sgnOut} onClick={() => this.props.onClickHandler('signIn')}>Sign in</button>
                </div>
            </div>
        );
    }
} 