import { combineReducers } from 'redux';
import breweries from './breweries';
import beers from './beers';
import history from './history';

const rootReducer = combineReducers({
    history,
    breweries,
    beers
});

export default rootReducer;