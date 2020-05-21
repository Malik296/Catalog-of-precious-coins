import React from 'react';
import { Component } from 'react';
import Style from './body.module.scss';
import { FilterComp } from './FilterComp';
import { Link, Redirect } from 'react-router-dom';
import addNewCoin from '../../img/add-new-coin/add-new-coin1.svg'


export class BodyTopComp extends Component {
    state = {
        serchData: [],
        filterPopup: false,
        redicectToSearh: false,
        searchText: '',

        issuingCountry: '',
        composition: '',
        quality: '',

        priceFrom: '',
        priceTo: '',

        yearFrom: '',
        yearTo: ''
    }

    onChangeYearFrom = (value) => {
        let yearTo = this.state.yearTo;

        if (value > yearTo) {
            yearTo = value;
        }

        this.setState({
            yearFrom: value,
            yearTo: yearTo,
        })
    }

    onChangeYearTo = (value) => {
        let yearFrom = this.state.yearFrom;
        console.log("onChangeYearTo = " + value);

        if (value < yearFrom) {
            yearFrom = value;
        }

        this.setState({
            yearFrom: yearFrom,
            yearTo: value,
        })
    }

    onChangePriceFrom = (value) => {
        let priceTo = this.state.priceTo;

        if (value > priceTo) {
            priceTo = value;
        }

        this.setState({
            priceFrom: value,
            priceTo: priceTo,
        })
    }

    onChangePriceTo = (value) => {
        let priceFrom = this.state.priceFrom;

        if (value < priceFrom) {
            priceFrom = value;
        }

        this.setState({
            priceFrom: priceFrom,
            priceTo: value,
        })
    }

    onChangeCountry = (value) => {
        this.setState({ issuingCountry: value })
    }

    onChangeComposition = (value) => {
        this.setState({ composition: value })
    }

    onChangeQuality = (value) => {
        this.setState({ quality: value })
    }

    showFilter = () => {
        this.setState({ filterPopup: !this.state.filterPopup })
    }

    searchHandler = (evnt) => {
        this.setState({ searchText: evnt.target.value });
    }

    //-------------------------------------------------------------------------------------------------
    getSearchResult = () => {
        this.setState({ redicectToSearh: true })

        const requestBody = {
            searchText: this.state.searchText,

            issuingCountry: this.state.issuingCountry,
            composition: this.state.composition,
            quality: this.state.quality,

            priceFrom: this.state.priceFrom,
            priceTo: this.state.priceTo,

            yearFrom: this.state.yearFrom,
            yearTo: this.state.yearTo

        }

        fetch(`http://localhost:3030/search`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    serchData: data,
                    redicectToSearh: true
                })
                this.props.setSearchData(data);
            })
    }
    //-------------------------------------------------------------------------------------------------

    render() {
        const { issuingCountry, composition, quality, priceFrom, priceTo, yearFrom, yearTo, redicectToSearh, serchData } = this.state;

        const adminTools = localStorage.getItem('admin');
        const { pathName } = this.props;
        let breadCrumbs = false;
        let headerName = '';
        if (pathName === '') {
            headerName = 'Homepage';
        } else {
            headerName = `List of ${pathName} coins`;
            breadCrumbs = true;
        }

        const filterPopup = this.state.filterPopup;
        return (
            <div className={Style.topComponent}>
                {redicectToSearh ? <Redirect to={{
                    pathname: '/search',
                    // state: { serchData }
                }} /> : null}
                <div className={Style.leftSide}>
                    <div className={Style.headerNameDiv}>
                        <h1>{headerName}</h1>
                        {breadCrumbs ? (<div className={Style.breadCrumbDiv}><Link to='/'>Homepage</Link><span> -- {headerName}</span></div>) : null}
                    </div>
                    <div>
                        <label>Input field</label>
                        <div>
                            <input type="text" value={this.state.searchText} onChange={this.searchHandler} />
                            <button onClick={this.getSearchResult}>Search</button>
                        </div>
                        <span onClick={this.showFilter}>Advanced filter</span>
                        {filterPopup ? <FilterComp  {...{ issuingCountry, composition, quality, quality, priceFrom, priceTo, yearFrom, yearTo }}
                            onChangeCountry={this.onChangeCountry}
                            onChangeComposition={this.onChangeComposition}
                            onChangeQuality={this.onChangeQuality}
                            onChangePriceFrom={this.onChangePriceFrom}
                            onChangePriceTo={this.onChangePriceTo}
                            onChangeYearFrom={this.onChangeYearFrom}
                            onChangeYearTo={this.onChangeYearTo} /> : null}
                    </div>
                </div>
                <div className={Style.rightSide}>
                    <div className={Style.rightSideInfoDiv}></div>
                    <div className={Style.addCoinDiv}>
                        {adminTools === 'true' ? (
                            <Link to={{
                                pathname: "/coin-form",
                                state: {
                                    backUrl: '/',
                                    coinId: ''
                                }
                            }} >
                                <img src={addNewCoin} alt="Add new coin" />
                                <span>Add a new coin</span>
                            </Link>) : null}
                    </div>
                </div>
            </div>
        );
    }
}