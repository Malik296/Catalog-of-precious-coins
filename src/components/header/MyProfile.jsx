import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss'
import UnauthorizedProfile from './UnauthorizedProfile';
import AuthorizedProfile from './AuthorizedProfile';

export class RegisterComp extends Component {
    render() {
        const login = localStorage.getItem('login');
        let checkAuthorize = false;
        if(login && login !== '') {
            checkAuthorize = true;
        }
        console.log("Login in storage" + login);
        return (
            <div className={Style.registerPopup}>
                {checkAuthorize ? <AuthorizedProfile /> : <UnauthorizedProfile {...this.props}/> }
                {/* <UnauthorizedProfile {...this.props}/> */}
                {/* <AuthorizedProfile /> */}
                {/* <div><p>Welcom to coins Site</p></div>
                <hr />
                <div className={Style.registerButtons}>
                    <button className={Style.sgnIn} onClick={() => this.props.onClickHandler('signUp')}>Sign up</button>
                    <button className={Style.sgnOut} onClick={() => this.props.onClickHandler('signIn')}>Sign in</button>
                </div> */}
            </div>
        );
    }
} 