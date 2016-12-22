import { connect } from 'react-redux';
import BeerList from '../components/beer-list';


function mapStateToProps(state) {
    return {
        beers: state.beers.all.map(beerId => {
            const beer = state.beers.byId[beerId];
            return {
                ...beer,
                brewery: {
                    ...state.breweries.byId[beer.breweryId]
                }
            }
        })
    }
}

const BeerListContainer = connect(
    mapStateToProps,
    null
)(BeerList);

export default BeerListContainer;