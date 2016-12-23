import { connect } from 'react-redux';
import BeerList from '../components/beer-list';


function shouldThisBeerBeVisible({ name, abv }, filters) {

    if (filters.name.length !== '') {
        let lcNameFilter = filters.name.toLowerCase();
        let lcName = name.toLowerCase();

        for (let i = 0; i < lcNameFilter.length; i++) {
            if (lcNameFilter[i] !== lcName[i]) {
                return false;
            }
        }
    }

    if (filters.abv.lower !== 'None' && Number(abv) < Number(filters.abv.lower)) {
        return false;
    }

    if (filters.abv.upper !== 'None' && Number(abv) > Number(filters.abv.upper)) {
        return false;
    }

    return true;
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