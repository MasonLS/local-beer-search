import { connect } from 'react-redux';
import App from '../components/app';

function mapStateToProps(state) {
    return {
        find: state.find
    }
}

const AppContainer = connect(
    mapStateToProps,
    null
)(App);

export default AppContainer;