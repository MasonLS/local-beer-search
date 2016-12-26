import React from 'react';
import BreweryListContainer from '../containers/brewery-list';
import BeerListContainer from '../containers/beer-list';
import BreweryDetailContainer from '../containers/brewery-detail';

function router(state) {
    switch (state.name) {
        case 'breweries':
            return <BreweryListContainer />;
        case 'beers':
            return <BeerListContainer />;
        case 'breweryDetail':
            return <BreweryDetailContainer brewery={state.params.brewery} />;
        case 'beerDetail':
            //TODO
            return;
    }
}

export default router;