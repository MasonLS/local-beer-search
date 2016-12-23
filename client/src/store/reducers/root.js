import { combineReducers } from 'redux';
import breweries from './breweries';
import beers from './beers';
import find from './find';

const rootReducer = combineReducers({
    find,
    breweries,
    beers
});

export default rootReducer;