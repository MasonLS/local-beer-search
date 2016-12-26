import Sidebar from '../components/sidebar';
import { connect } from 'react-redux';
import { pushState, filterBreweries, filterBeers, fetchBreweries } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        history: state.history,
        breweryFilters: state.breweries.activeFilters,
        beerFilters: state.beers.activeFilters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFind: (state) => {
            dispatch(pushState(state));
        },
        fetchBreweries: (coords, radius) => {
            dispatch(fetchBreweries(coords, radius));
        },
        filterBreweries: (filters) => {
            dispatch(filterBreweries(filters));
        },
        filterBeers: (filters) => {
            dispatch(filterBeers(filters));
        }
    }
}

const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);

export default SidebarContainer;