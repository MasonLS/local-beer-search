export default {
    breweries: {
        all: [],
        byId: {},
        activeFilters: {
            name: '',
            distance: ''
        },
        isFetching: false
    },
    beers: {
        all: [],
        displayed: [],
        byId: {},
        activeFilters: {
            name: '',
            style: '',
            abv: '',
            breweryId: ''
        }
    }
}