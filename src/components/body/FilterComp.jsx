import React from 'react';
import { Component } from 'react';
import Style from './body.module.scss';

export class FilterComp extends Component {
    render() {
        return (
            <div className={Style.filterContainer}>
                <div className={Style.leftSideF}>
                    <label htmlFor="country-id">Issuing country</label>
                    <div>
                        <select name="" id="country-id"></select>
                    </div>
                    <label htmlFor="metal-id">Metal</label>
                    <div>
                        <select name="" id="metal-id">
                            <option value=""></option>
                            <option value="">opt1</option>
                            <option value="">opt1</option>
                            <option value="">opt1</option>
                        </select>
                    </div>
                    <label htmlFor="quality-id">Quality of the coin</label>
                    <div>
                        <select name="" id="quality-id"></select>
                    </div>
                </div>
                <div className={Style.rightSideF}>
                    <label htmlFor="country-id">Price</label>
                    <div>
                    <span>from</span>
                        <input type="text" />
                        <span>to</span>
                        <input type="text" />
                    </div>
                    <label htmlFor="metal-id">Year of issue</label>
                    <div>
                        <span>from</span>
                        <input type="text" />
                        <span>to</span>
                        <input type="text" />
                    </div>
                </div>
            </div>
        );
    }
}