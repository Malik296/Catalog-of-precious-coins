import React from 'react';
import { Component } from 'react';
import Style from './list.module.scss';
import { GroupsComp } from '../croup/GroupsComp';
import { Route, Link } from "react-router-dom";
import { CoinsListComp } from './coins-list/CoinsListComp';
import { CoinInfoComp } from './coin-info/CoinInfoComp';
import { BodyTopComp } from './BodyTopComp';
import { Search } from './search/Search';

export class ListComponent extends Component {
    state = {
        searchData: []
    }

    setSearchData = (data) => {
        // console.log(data);
        this.setState({ searchData: data })
    }
    render() {
        const pathName = window.location.pathname.slice(1, window.location.pathname.length);
        console.log("Path Name " + pathName);
        return (
            <div className={Style.listContainer}>
                <BodyTopComp pathName={pathName} setSearchData={this.setSearchData} />
                <Route exact path="/" component={GroupsComp} />
                <Route exact path="/:link" component={CoinsListComp} />
                <Route exact path="/search">
                    <Search searchData={this.state.searchData} />
                </Route>

                {/* <Route path="/coin/:id" component={CoinInfoComp}>
                </Route> */}
            </div>
        );
    }
}