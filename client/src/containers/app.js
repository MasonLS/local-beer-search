import { connect } from 'react-redux';
import App from '../components/app';
import { fetchBreweries } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        find: state.find
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchInitialBreweries: (coords, radius) => {
            return dispatch(fetchBreweries(coords, radius));
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default AppContainer;