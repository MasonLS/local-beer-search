import Breweries from '../components/breweries';
import { connect } from 'react-redux';

function shouldThisBreweryBeVisible({ distance, name }, filters) {

    if (filters.distance !== '' && distance > filters.distance) {
        return false;
    }

    if (filters.name !== '') {
        let lcNameFilter = filters.name.toLowerCase();
        let lcName = name.toLowerCase();

        for (let i = 0; i < lcNameFilter.length; i++) {
            if (lcNameFilter[i] !== lcName[i]) {
                return false;
            }
        }
    }

    return true;
}

function mapStateToProps(state) {
    return {
        mapCenter: state.breweries.activeFilters.coords,
        breweries: state.breweries.all.map(breweryId => state.breweries.byId[breweryId])
            .filter(brewery => {
                return shouldThisBreweryBeVisible(brewery, state.breweries.activeFilters);
            })
    }
}

const BreweriesContainer = connect(
    mapStateToProps,
    null
)(Breweries);

export default BreweriesContainer;