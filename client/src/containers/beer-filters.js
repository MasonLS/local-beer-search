import BeerFilters from '../components/beer-filters';
import { connect } from 'react-redux';
import { filterBeers } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        filters: state.beers.activeFilters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        filterBeers: (filters) => {
            dispatch(filterBeers(filters));
        }
    }
}

const BeerFiltersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerFilters);

export default BeerFiltersContainer;