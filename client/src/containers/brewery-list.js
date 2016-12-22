import { connect } from 'react-redux';
import BreweryList from '../components/brewery-list';
import { fetchBreweries } from '../store/actions/creators';


function filterBreweries(breweries, filters) {
    return breweries.filter(brewery => {
        //TODO
        return true;
    });
}

function mapStateToProps(state) {
    return {
        breweries: state.breweries.all.map(breweryId => state.breweries.byId[breweryId])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchInitialBreweries: (coords, radius) => {
            dispatch(fetchBreweries(coords, radius));
        }
    }
}

const BreweryListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreweryList);

export default BreweryListContainer;