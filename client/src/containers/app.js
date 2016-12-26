import { connect } from 'react-redux';
import App from '../components/app';

function mapStateToProps(state) {
    return {
        history: state.history
    }
}

const AppContainer = connect(
    mapStateToProps,
    null
)(App);

export default AppContainer;