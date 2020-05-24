import { CHANCE_RECYCLE_BIN_COUNT } from "./actions";

const initialState = {
    count: 0,
}

export function headerReducer(state = initialState, action) {
    switch (action.type) {
        case CHANCE_RECYCLE_BIN_COUNT:
            return { ...state, count: action.payload };
    }
    return state;
}