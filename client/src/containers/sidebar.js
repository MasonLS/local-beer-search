import Sidebar from '../components/sidebar';
import { connect } from 'react-redux';
import { changeFind, filterBreweries, filterBeers, fetchBreweries } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        find: state.find,
        breweryFilters: state.breweries.activeFilters,
        beerFilters: state.beers.activeFilters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFind: (find) => {
            dispatch(changeFind(find));
        },
        filterBreweries: (filters) => {
            dispatch(filterBreweries(filters));
        },
        fetchBreweries: (coords, radius) => {
            dispatch(fetchBreweries(coords, radius));
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