import { connect } from 'react-redux';
import BeerList from '../components/beer-list';

function isStyle(beerStyle, style) {
    if (style === 'all') {
        return true;
    }

    const styleArr = style.split(' ');
    const beerStyleArr = beerStyle.toLowerCase().split(' ');

    for (let i = 0; i < styleArr.length; i++) {
        if (beerStyleArr.indexOf(styleArr[i]) === -1) {
            return false;
        }
    }

    return true;
}

function shouldThisBeerBeVisible({ name, style, abv, breweryId }, filters) {
    if (breweryId && breweryId !== filters.breweryId) {
        return false;
    }

    if (filters.name !== '') {
        const lcNameFilter = filters.name.toLowerCase();
        const lcName = name.toLowerCase();

        for (let i = 0; i < lcNameFilter.length; i++) {
            if (lcNameFilter[i] !== lcName[i]) {
                return false;
            }
        }
    }

    if (filters.abv.lower !== 'none' && Number(abv) < Number(filters.abv.lower)) {
        return false;
    }

    if (filters.abv.upper !== 'none' && Number(abv) > Number(filters.abv.upper)) {
        return false;
    }

    return isStyle(style, filters.style);
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