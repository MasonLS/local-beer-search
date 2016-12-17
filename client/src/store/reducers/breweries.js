import initialState from '../state';
import actionTypes from '../actions/types';


class ById {
    constructor(breweries) {
        breweries.forEach(brewery => {
            this[brewery.breweryId] = {...brewery};
        });
    }
}


function breweries (state = initialState.breweries, action) {
    switch (action.type) {
        case actionTypes.async.FETCH_BREWERIES_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case actionTypes.async.FETCH_BREWERIES_SUCCESS:
            return {
                ...state,
                all: action.breweries.map(brewery => brewery.breweryId),
                byId: new ById(action.breweries),
                isFetching: false
            }
        case actionTypes.async.FETCH_BREWERIES_FAILURE:
            //TODO
            return {
                ...state,
                isFetching: false
            }
        case actionTypes.UPDATE_BREWERIES_FILTER:
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

export default breweries;