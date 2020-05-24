import React, { Component } from 'react';
import Style from './recycle.module.scss';
import { BinCoinComp } from './BinCoinComp';
import closeIcon from '../../img/recycle-bin/close-icon.svg'

export default class ListPopup extends Component {
    render() {
        const { data } = this.props;
        let rows = [];
        if (data) {
            rows = data.map(obj => (<BinCoinComp key={obj.id} data={obj} />))
        }
        return (
            <div className={Style.listPopupContainer} onClick={this.props.closeListPopup}>
                <div className={Style.listContainer}>
                    {/* <img className={Style.closeIcon} src={closeIcon} alt=""/> */}
                    {rows}
                </div>
            </div>
        );
    }
}