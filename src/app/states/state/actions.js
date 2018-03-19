import * as ActionTypes from "./action-types";
import * as service from './service';

export function initStates(states){
    return {
        type: ActionTypes.INIT_STATES,
        payload: {
            states: states
        }
    }
}

export function viewState(state){
    return {
        type: ActionTypes.VIEW_STATE,
        payload: {
            state: state
        }
    }
}

export function editState(state){
    return {
        type: ActionTypes.EDIT_STATE,
        payload: {
            state: state
        }
    }
}

export function loading(status){
    return {
        type: ActionTypes.LOADING,
        payload: {
            status: status
        }
    }
}

export function initError(error) {
    return {
        type: ActionTypes.ERROR,
        payload: {
            error: error
        }
    }
}

export function fetchState(id = '') {
    return function(dispatch){
        console.log('Called by thunk');

        dispatch(loading(true));

        service.getState(id).then (state => {
            let action = (id === '') ? initStates(state) : viewState(state);
            dispatch(action);
            dispatch(loading(false));
        });
    }
}

export function updateState(state) {
    return function(dispatch){

        service.updateState(state).then (state => {
            let action = editState(state);
            dispatch(action);
        });
    }
}