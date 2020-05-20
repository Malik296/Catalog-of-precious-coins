import React from 'react';
import { Component } from 'react';
import Style from './header.module.scss'
import { Link } from 'react-router-dom';

class AuthorizedProfile extends Component {
    logoutHandler = () => {
        // localStorage.clear();
        const token = localStorage.getItem('token');
        fetch(`http://localhost:3030/token`, {
            method: 'DELETE',
            body: JSON.stringify({ token }),
            headers: { 'Content-type': 'application/json' }
        })
            .finally(() => {
                window.location.reload(false);
                localStorage.clear()
            })
    }
    render() {
        const login = localStorage.getItem('login');
        return (
            <>
                <div>
                    <p>Hello again, <span>{login}</span></p>
                    <Link to='/' onClick={this.logoutHandler} >Logout</Link>
                </div>
                {/* <hr /> */}
                <div className={Style.registerButtons}>
                    {/* <button className={Style.sgnIn} onClick={() => this.props.onClickHandler('signUp')}>Sign up</button>
                    <button className={Style.sgnOut} onClick={() => this.props.onClickHandler('signIn')}>Sign in</button> */}
                </div>
            </>
        );
    }
}

export default AuthorizedProfile;