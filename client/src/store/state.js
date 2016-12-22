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
        byId: {},
        activeFilters: {
            name: '',
            style: '',
            abv: '',
            breweryId: ''
        }
    }
}