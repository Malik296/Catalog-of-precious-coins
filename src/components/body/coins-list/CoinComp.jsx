import React from 'react';
import { Component } from 'react';
import Style from './coinComponent.module.scss';
import { Link } from 'react-router-dom';
import addToCart from '../../../img/add-to-cart/add-to-cart.svg';
import deleteIcon from '../../../img/delete/delete-icon.svg'
import editIcon from '../../../img/edit/edit.svg'

export class CoinComp extends Component {

    deleteButtonHandler = (coinId) => {
        this.props.addToRecycleBin(coinId);
        // alert(coinId);
    }

    render() {
        const adminTools = localStorage.getItem('admin');
        // console.log('adminTools ' + adminTools)
        const { id, name, shortDescription, aversImg, backUrl } = this.props;
        // console.log("Income Back Url = " + backUrl);

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
                    <div className={Style.linkAndAddToCartDiv}>
                        <Link to={{
                            pathname: linkId,
                            state: {
                                backUrl: backUrl,
                            }
                        }}>{name}</Link>

                        {adminTools === 'true' ? (<div className={Style.adminToolsDiv}>
                            <Link to={{
                                pathname: "/coin-form",
                                state: {
                                    backUrl: '/',
                                    coinId: id
                                }
                            }} ><img src={editIcon} alt="Edit icon" /></Link>
                            
                            <img src={deleteIcon} alt="Delete icon" onClick={() => this.deleteButtonHandler(id)} />
                        </div>) : (<div className={Style.addToCartDiv}>
                            <img src={addToCart} alt="Add to cart" title="Add to cart" />
                        </div>)}

                    </div>
                    <p>{shortDescription}</p>

                </div>
                <div>
                </div>
            </div>
        );
    }
}