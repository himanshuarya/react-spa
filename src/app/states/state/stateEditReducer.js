import * as ActionTypes from '../state/action-types';

const INITIAL_STATE = {
    state: {}
}

export default function stateEditReducer(state = INITIAL_STATE, action) {
    console.log("stateEditReducer", state, action);
    switch(action.type) {        
        case ActionTypes.EDIT_STATE:
            return Object.assign({}, state, {state: action.payload.state});

        default:
            return state;
    }
}