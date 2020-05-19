import React from 'react';
import { Component } from 'react';
import Style from './coinComponent.module.scss';
import { Link } from 'react-router-dom';

export class CoinComp extends Component {
    render() {
        const { id, name, shortDescription, aversImg, backUrl} = this.props;
        console.log("Income Back Url = " + backUrl);

        let linkId = `/coin/${id}`;
        return (
            <div className={Style.coinContainer}>
                <div>
                    <div className={Style.imageDiv}>
                        <img src={aversImg} alt="Coin image" />
                    </div>
                </div>

                <div className={Style.infoDiv}>
                    {/* to={linkId} */}
                    <Link to={{
                        pathname: linkId,
                        state: {
                            backUrl: backUrl,
                        }
                    }}>{name}</Link>
                    <p>{shortDescription}</p>
                </div>
            </div>
        );
    }
}