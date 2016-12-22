import initialState from '../state';
import actionTypes from '../actions/types';


class ById {
    constructor(beers) {
        beers.forEach(beer => {
            this[beer.id] = {...beer};
        });
    }
}

function beers(state = initialState.beers, action) {
    switch (action.type) {
        case actionTypes.async.RECEIVE_BEERS:
            return {
                ...state,
                all: action.beers.map(beer => beer.id),
                byId: new ById(action.beers)
            }
        case actionTypes.UPDATE_BEERS_FILTER:
            return {
                ...state,
                activeFilters: {
                    ...state.activeFilters,
                    ...action.filters
                }
            }
        default:
            return state;
    }
}

export default beers;