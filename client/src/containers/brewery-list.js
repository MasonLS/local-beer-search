import { connect } from 'react-redux';
import BreweryList from '../components/brewery-list';
import { fetchBreweries, pushState } from '../store/actions/creators';


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
        breweries: state.breweries.all.map(breweryId => state.breweries.byId[breweryId])
            .filter(brewery => {
                return shouldThisBreweryBeVisible(brewery, state.breweries.activeFilters);
            })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToBrewery: (brewery) => {
            dispatch(pushState({ name: 'breweryDetail', params: { brewery }}));
        }
    }
}

const BreweryListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreweryList);

export default BreweryListContainer;