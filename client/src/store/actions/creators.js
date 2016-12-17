import actionTypes from './types';
import fetch from 'isomorphic-fetch';

export function filterBreweries(filters) {
    return {
        type: actionTypes.UPDATE_BREWERIES_FILTER,
        filters
    }
}

export function filterBeers(filters) {
    return {
        type: actionTypes.UPDATE_BEERS_FILTER,
        filters
    }
}

function requestBreweries() {
    return {
        type: actionTypes.async.FETCH_BREWERIES_REQUEST,
    }
}

function receiveBreweries(json) {
    return {
        type: actionTypes.async.FETCH_BREWERIES_SUCCESS,
        breweries: json.data
    }
}

function handleError(type, error) {
    return {
        type,
        error
    }
}

export function fetchBreweries(coords, radius) {
    return function (dispatch) {
        dispatch(requestBreweries());
        const uri = '/api/search/geo/point?lat=' + coords.latitude + '&lng=' + coords.longitude + '&radius=' + radius;
        
        return fetch(uri, {
            accept: 'application/json'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(receiveBreweries(json));
        })
        .catch(error => {
            dispatch(handleError(actionTypes.async.FETCH_BREWERIES_FAILURE, error));
        });
    }
}

function receiveBeers(json) {
    return {
        type: actionTypes.async.FETCH_BEERS_SUCCESS,
        beers: json.data
    }
}

export function fetchBeers(breweryId) {
    return function (dispatch) {
        const uri = '/api/brewery/' + breweryId + '/beers';

        return fetch(uri, {
            accept: 'application/json'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(receiveBeers(json));
        })
        .catch(error => {
            dispatch(handleError(actionTypes.async.FETCH_BEERS_FAILURE), error);
        });
    }
}