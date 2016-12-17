import { combineReducers } from 'redux';
import breweries from './breweries';
import beers from './beers';


const rootReducer = combineReducers({
    breweries,
    beers
});

export default rootReducer;