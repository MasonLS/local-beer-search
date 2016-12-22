import { connect } from 'react-redux';
import BeerList from '../components/beer-list';


function shouldThisBeerBeVisible(beer, filters) {
    let decision = true;

    for (let key in filters) {
        if (filters[key] !== '' && beer[key] !== filters[key]) {
            decision = false;
        }
    }

    return decision;
}

function mapStateToProps(state) {
    return {
        beers: state.beers.all.map(beerId => {
            const beer = state.beers.byId[beerId];
            return {
                ...beer,
                brewery: {
                    ...state.breweries.byId[beer.breweryId]
                }
            }
        })
        .filter(beer => {
            return shouldThisBeerBeVisible(beer, state.beers.activeFilters);
        })
    }
}

const BeerListContainer = connect(
    mapStateToProps,
    null
)(BeerList);

export default BeerListContainer;