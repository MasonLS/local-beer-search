import initialState from '../state';
import actionTypes from '../actions/types';

function history(state = initialState.history, action) {
    switch (action.type) {
        case actionTypes.PUSH_STATE:
            return {
                currentState: {...action.newState},
                previousState: {...state.currentState}
            }
        default:
        return state;
    }
}

export default history;