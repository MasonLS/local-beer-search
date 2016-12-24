import BreweryDetail from '../components/brewery-detail';
import { connect } from 'react-redux';
import { filterBreweries } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        breweriesById: state.breweries.byId
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

const BreweryDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreweryDetail);

export default BreweryDetailContainer;