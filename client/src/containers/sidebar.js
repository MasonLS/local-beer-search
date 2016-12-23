import Sidebar from '../components/sidebar';
import { connect } from 'react-redux';
import { changeFind, filterBreweries, filterBeers } from '../store/actions/creators';

function mapStateToProps(state) {
    return {
        find: state.find
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