import { connect } from 'react-redux';
import BreweryList from '../components/brewery-list';


function filterBreweries(breweries, filters) {
    return breweries.filter(brewery => {
        //TODO
        return true;
    });
}

function mapStateToProps(state) {
    return {
        breweries: filterBreweries(state.breweries.all.map(breweryId => state.breweries.byId[breweryId]), state.breweries.activeFilters)
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

const BreweryListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreweryList);

export default BreweryListContainer;