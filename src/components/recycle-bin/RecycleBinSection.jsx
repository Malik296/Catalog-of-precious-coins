import React, { Component } from 'react';
import Style from './recycle.module.scss';
import ListPopup from './ListPopup';

export default class RecycleBinSection extends Component {
    state = {
        listCount: 0,
        data: [],
        listPopup: false,
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        let listName = this.props.listName.toLowerCase().split(' ')[0];
        console.log(listName);

        const requestBody = {
            limit: this.props.count,
            page: 1,
            showCoin: 0,
        }

        fetch(`http://localhost:3030/list/${listName}`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText)
                }

                return res.json();
            })
            .then(data => {
                this.setState({ data: data[0] });
            })
            .catch(err => alert(err))
    }

    openListPopup = () => {
        this.setState({ listPopup: true });
    }

    closeListPopup = (evnt) => {
        console.log(evnt.target)
        if (evnt.target.matches('.recycle_listPopupContainer__11X51')) {
            this.setState({ listPopup: false })
        }
    }


    render() {
        const { count } = this.props;
        const { listName } = this.props;
        return (
            <div className={Style.recycleBinSection}>
                <div>
                    <h2>{listName}</h2>
                </div>
                <div className={Style.crcleDiv}>
                    <h2>{count}</h2>
                    <hr />
                    <h3>5 m.</h3>
                </div>
                <div className={Style.buttonsDiv}>
                    <button onClick={this.openListPopup} className={Style.listButton}>List</button>
                    <button className={Style.restoreButton}>Restore All</button>
                    <button className={Style.deleteButton}>Delete All</button>
                </div>
                {this.state.listPopup ? <ListPopup data={this.state.data} closeListPopup={this.closeListPopup} /> : null}
            </div>
        );
    }
}