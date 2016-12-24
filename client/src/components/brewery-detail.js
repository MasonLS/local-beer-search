import React, { Component } from 'react';

class BreweryDetail extends Component {
    render() {
        const brewery = this.props.breweriesById[this.props.params.id];

        return (
            <div>
                {brewery.name}
            </div>
        );
    }
}

export default BreweryDetail;