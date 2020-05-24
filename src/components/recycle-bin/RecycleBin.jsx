import React, { Component } from 'react';
import Style from './recycle.module.scss';
import RecycleBinSection from './RecycleBinSection';

export default class RecycleBin extends Component {
    state = {
        commemorative: 0,
        bullion: 0,
        exclusive: 0,
    }
    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('http://localhost:3030/recycle-bin', {method: 'GET'})
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.setState({...this.state, ...data});
            })
            .catch(err => alert(err));
    }

    render() {
        const { commemorative, bullion, exclusive } = this.state;
        // console.log([ commemorative, bullion, exclusive ]);
        return (
            <div className={Style.recycleBinContainer}>
                <h1>Recycle Bin</h1>
                <div className={Style.sectionsContainer}>
                    <RecycleBinSection count={bullion} listName="Bullion coins" />
                    <RecycleBinSection count={exclusive} listName="Exclusive coins" />
                    <RecycleBinSection count={commemorative} listName="Commemorative coins" />
                </div>
            </div>
        );
    }
}