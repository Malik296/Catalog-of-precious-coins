import React from 'react';
import { Component } from 'react';
import Style from './coinForm.module.scss';

export default class CoinForm extends Component {
    state = {
        backUrl: '',
        coinId: ''
    }

    componentDidMount() {
        if (this.props.history.location.state) {
            // console.log("-----------------")
            // console.log(this.props.history.location.state)
            const { backUrl, coinId } = this.props.history.location.state;
            this.setState({ backUrl, coinId });
        }
    }

    render() {
        const { backUrl, coinId } = this.state;
        return (
            <div className={Style.coinFormContainer}>
                <h1>{coinId !== '' ? 'Coin data update' : 'Adding a coin'}</h1>
                <form action="">
                    <div className={Style.fomrSection}>
                        <label htmlFor="">Coin name</label>
                        <input type="text" />
                        <label htmlFor="">Face value</label>
                        <input type="text" />
                        <label htmlFor="">Year of issue</label>
                        <input type="text" />
                        <label htmlFor="">Price</label>
                        <input type="text" />
                        <label htmlFor="">Country</label>
                        <input type="text" />
                        <label htmlFor="">Metal</label>
                        <input type="text" />
                    </div>
                    <div className={Style.fomrSection}>
                        <label htmlFor="">Short description</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <label htmlFor="">Long description</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <label htmlFor="">Quality of the coin</label>
                        <input type="text" />
                        <label htmlFor="">Weight</label>
                        <input type="text" />
                    </div>

                    <div className={Style.fomrSection}>
                        <div className={Style.coinsImagesDiv}>
                            <div className={Style.coinsImageDiv}></div>
                            <div className={Style.coinsImageDiv}></div>
                        </div>

                        <label htmlFor="">Type</label>
                        <select name="" id="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </form>
            </div>
        );
    }
}