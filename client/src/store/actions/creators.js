import actionTypes from './types';
import fetch from 'isomorphic-fetch';

export function pushState(newState) {
    return {
        type: actionTypes.PUSH_STATE,
        newState
    }
}

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

function receiveBreweries(breweries) {
    return {
        type: actionTypes.async.FETCH_BREWERIES_SUCCESS,
        breweries
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
        const uri = '/api/breweries/geopoint?lat=' + coords.latitude + '&lng=' + coords.longitude + '&radius=' + radius;
        
        return fetch(uri, {
            accept: 'application/json'
        })
        .then(response => response.json())
        .then(breweriesWithBeers => {
            dispatch(receiveBreweries(breweriesWithBeers));
            dispatch(receiveBeers(breweriesWithBeers));
        })
        .catch(error => {
            dispatch(handleError(actionTypes.async.FETCH_BREWERIES_FAILURE, error));
        });
    }
}

export function receiveBeers(breweriesWithBeers) {
    const beers = breweriesWithBeers.reduce((a, b) => {
       return a.concat(b.beers);
    }, []);
    return {
        type: actionTypes.async.RECEIVE_BEERS,
        beers
    }
}