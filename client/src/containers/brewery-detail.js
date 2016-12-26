import BreweryDetail from '../components/brewery-detail';
import { connect } from 'react-redux';
import { filterBeers, pushState } from '../store/actions/creators';

function mapDispatchToProps(dispatch) {
    return {
            goBack: (breweryId) => {
            
        }
    }
}

const BreweryDetailContainer = connect(
    null,
    mapDispatchToProps
)(BreweryDetail);

export default BreweryDetailContainer;