import initialState from '../state';
import actionTypes from '../actions/types';

function find(state = initialState.find, action) {
    switch (action.type) {
        case actionTypes.CHANGE_FIND:
            return action.find;
        default:
        return state;
    }
}

export default find;