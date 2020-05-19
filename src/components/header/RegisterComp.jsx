import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss'

export class RegisterComp extends Component {
    render() {
        return (
            <div className={Style.registerPopup}>
                <div><p>Welcom to coins Site</p></div>
                <hr/>
                <div className={Style.registerButtons}>
                    <button className={Style.sgnIn}>Sign up</button>
                    <button className={Style.sgnOut}>Log in</button>
                </div>
            </div>
        );
    }
} 