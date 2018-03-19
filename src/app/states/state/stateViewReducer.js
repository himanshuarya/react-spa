import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    state: {}
}

export default function stateViewReducer(state = INITIAL_STATE, action) {
    console.log("stateViewReducer", state, action);
    switch(action.type) {        
        case ActionTypes.VIEW_STATE:
            return Object.assign({}, state, {state: action.payload.state});

        default:
            return state;
    }
}