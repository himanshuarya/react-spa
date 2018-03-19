import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import stateListReducer from "./states/state/stateListReducer";
import stateEditReducer from "./states/state/stateEditReducer";
import stateViewReducer from "./states/state/stateViewReducer";
 
const rootReducers = combineReducers({
    stateList: stateListReducer,
    stateEdit: stateEditReducer,
    stateView: stateViewReducer
});

let store = createStore(rootReducers, applyMiddleware(thunk));
export default store;