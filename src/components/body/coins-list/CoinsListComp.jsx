import React from 'react';
import { Component } from 'react';
import { CoinComp } from './CoinComp';

export class CoinsListComp extends Component {

    state = {
        data: [],
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        const { match } = this.props;
        fetch(`http://localhost:3030/list${match.url}`)
            .then(resp => resp.json())
            .then(data => this.setState({ data: data }))
    }


    render() {
        let elements = [];
        if (this.state.data.length !== 0) {
            elements = this.state.data.map(obj => <CoinComp key={obj.id} backUrl={this.props.match.url} {...obj} />);
        }
        return (
            <>
                {elements}
            </>
        );
    }
}