import { combineReducers } from "redux";

import productReducer from './products/reducer/reducer'


const rootReducers = combineReducers({
    productReducer,
});

export default rootReducers;