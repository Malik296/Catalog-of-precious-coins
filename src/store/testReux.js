import {createStore} from 'redux';

const initialState = {
    header: 'Homepage'
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANCE_HEADER':
            return {...state, header: action.payload};
    }
    return state;
}

const testStore = createStore(reducer);

const chanceHeader = {
    type: 'CHANCE_HEADER',
    payload: 'List'
}

