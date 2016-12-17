import initialState from '../state';
import actionTypes from '../actions/types';


function getNextDisplayed (beers, activeFilters) {
    return beers.filter(beer => {
        //TODO
        return true;
    })
    .map(beer => beer.id);
}

class ById {
    constructor(beers) {
        beers.forEach(beer => {
            this[beer.id] = {...beer};
        });
    }
}

function beers(state = initialState.beers, action) {
    switch (action.type) {
        case actionTypes.async.FETCH_BEERS_SUCCESS:
            const all = [
                ...state.all,
                ...action.beers.map(beer => beer.id)
            ]
            return {
                ...state,
                all,
                displayed: getNextDisplayed(all, state.activeFilters),
                byId: {
                    ...state.byId,
                    ...new ById(action.beers)
                }
            }
        case actionTypes.UPDATE_BEERS_FILTER:
            //TODO
            return state;
        default:
            return state;
    }
}

export default beers;