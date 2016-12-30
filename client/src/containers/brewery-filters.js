import BreweryFilters from '../components/brewery-filters';
import { connect } from 'react-redux';
import { filterBreweries, fetchBreweries } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        filters: state.breweries.activeFilters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterBreweries: (filters) => {
            dispatch(filterBreweries(filters));
        },
        fetchBreweries: (coords, radius) => {
            dispatch(fetchBreweries(coords, radius));
        }
    }
}

const BreweryFiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreweryFilters);

export default BreweryFiltersContainer;