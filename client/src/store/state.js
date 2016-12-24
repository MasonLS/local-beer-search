export default {
    find: 'breweries',
    breweries: {
        all: [],
        byId: {},
        activeFilters: {
            name: '',
            distance: '10',
            coords: {
                latitude: '',
                longitude: ''
            }
        },
        isFetching: false
    },
    beers: {
        all: [],
        byId: {},
        activeFilters: {
            name: '',
            style: 'all',
            abv: {
                lower: 'none',
                upper: 'none'
            },
            breweryId: ''
        }
    }
}