export default {
    find: 'Breweries',
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
            style: '',
            abv: {
                lower: 'None',
                upper: 'None'
            },
            breweryId: ''
        }
    }
}