import { combineReducers } from "redux";
import { topBodyReducer } from './body-top/reducers'

export default combineReducers({
    topBody: topBodyReducer,
})