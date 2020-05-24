import React from 'react';
import { Component } from 'react';
// import Style from './coinComponent.module.scss';
import Style from './recycle.module.scss'; 

import { Link } from 'react-router-dom';
import deleteIcon from '../../img/delete/delete-icon.svg'
import restoreIcon from '../../img/recycle-bin/restore-icon.svg'

export class BinCoinComp extends Component {

    deleteButtonHandler = (coinId) => {
        // this.props.addToRecycleBin(coinId);
        alert(coinId);
    }

    render() {
        const {data} = this.props;
        // console.log(this.props)

        return (
            <div className={Style.coinContainer}>
                <div>
                    <div className={Style.imageDiv}>
                        <img src={data.aversImg} alt="Coin image" />
                    </div>
                </div>

                <div className={Style.infoDiv}>
                    <div className={Style.linkAndAddToCartDiv}>
                        <Link to="">{data.name}</Link>

                        <div className={Style.adminToolsDiv}>
                            <img src={restoreIcon} onClick={() => alert("Restore")} alt="Edit icon" />
                            <img src={deleteIcon} alt="Delete icon" onClick={() => this.deleteButtonHandler(12)} />
                        </div>
                    </div>
                    <p>{data.shortDescription}</p>
                </div>
                <div>
                </div>
            </div>
        );
    }
}