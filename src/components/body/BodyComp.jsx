import React from 'react';
import { Component } from 'react';
import Style from './body.module.scss'
import { BodyTopComp } from './BodyTopComp';
import { ListComponent } from './ListComp';
import { Route, Switch } from "react-router-dom";
import { CoinInfoComp } from './coin-info/CoinInfoComp';
import CoinForm from './coin-form/CoinForm';
// import RegistrationContainer from '../registrations/RegistrationContainer';


export class BodyComp extends Component {
    render() {
        return (
            <div className={Style.mainContainer}>
                {/* <RegistrationContainer /> */}
                {/* <BodyTopComp /> */}
                <Switch>
                    <Route exact path="/coin/:id" component={CoinInfoComp} />
                    <Route exact path ="/coin-form" component={CoinForm} />
                    <ListComponent />
                </Switch>
            </div>
        );
    }
}