import React from 'react';
import { Component } from 'react';
import Style from './body.module.scss';
import { FilterComp } from './FilterComp';
import { Link } from 'react-router-dom';
import addNewCoin from '../../img/add-new-coin/add-new-coin1.svg'

// import { connect } from 'react-redux';

export class BodyTopComp extends Component {
    state = {
        searchText: '',
        filterPopup: false,
    }

    showFilter = () => {
        this.setState({ filterPopup: !this.state.filterPopup })
    }

    searchHandler = (evnt) => {
        this.setState({ searchText: evnt.target.value });
    }

    getSearchResult = () => {
        fetch(`http://localhost:3030/search?src=${this.state.searchText}`)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    correctHeaderName = (value) => {

    }

    render() {
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
                <div className={Style.leftSide}>
                    <div className={Style.headerNameDiv}>
                        <h1>{headerName}</h1>
                        {breadCrumbs ? (<div className={Style.breadCrumbDiv}><Link to='/'>Homepage</Link><span> -- {headerName}</span></div>) : null}
                    </div>
                    {/* <h1>{this.props.test}</h1> */}
                    <div>
                        <label>Input field</label>
                        <div>
                            <input type="text" value={this.state.searchText} onChange={this.searchHandler} />
                            <button onClick={this.getSearchResult}>Search</button>
                        </div>
                        <span onClick={this.showFilter}>Advanced filter</span>
                        {filterPopup ? <FilterComp /> : null}
                    </div>
                </div>
                <div className={Style.rightSide}>
                    <div className={Style.rightSideInfoDiv}></div>
                    <div className={Style.addCoinDiv}>
                        {adminTools ? (
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

// const mapStateToProps = (state) => {
//     return {
//         test: state.topBody.headerName
//     }
// }

// export default connect(mapStateToProps)(BodyTopComp);