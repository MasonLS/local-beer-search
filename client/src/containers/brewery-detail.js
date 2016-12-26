import BreweryDetail from '../components/brewery-detail';
import { connect } from 'react-redux';
import { filterBeers, pushState } from '../store/actions/creators';

function mapDispatchToProps(dispatch) {
    return {
            goToBeers: (breweryId) => {
            dispatch(filterBeers({ breweryId }));
            dispatch(pushState({ name: 'beers'}));
        }
    }
}

const BreweryDetailContainer = connect(
    null,
    mapDispatchToProps
)(BreweryDetail);

export default BreweryDetailContainer;