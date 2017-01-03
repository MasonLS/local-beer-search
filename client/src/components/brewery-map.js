import React, { Component } from 'react';

class BreweryMap extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(({ coords })=> {
            this.map = new window.google.maps.Map(this.refs.map, {
                center: new window.google.maps.LatLng(coords.latitude, coords.longitude),
                zoom: 10,
                minZoom: 3,
                maxZoom: 12,
                zoomControl: true
            });
            this.map.addListener('zoom_changed', () => {
                let center = this.map.getCenter();
                let radius = window.google.maps.geometry.spherical.computeDistanceBetween(center, this.map.getBounds().getNorthEast());
                let distance = radius/1609.34;
                this.props.filterBreweries({ distance: String(distance) });
                this.props.fetchBreweries({ latitude: center.lat(), longitude: center.lng() }, distance);
            });
            this.map.addListener('dragend', () => {
                console.log('Center changed!');
            });
        });
    }

    render() {
        this.props.breweries.forEach(brewery => {
            let position = new window.google.maps.LatLng(brewery.latitude, brewery.longitude); 
            let marker = new window.google.maps.Marker({
                position,
                map: this.map
            });
            marker.addListener('click', () => {
                this.map.panTo(position);
                this.map.setZoom(15);
            });
        });
        return (
            <div ref="map" style={{ width: 400, height: 400 }} />
        );
    }
}

export default BreweryMap;