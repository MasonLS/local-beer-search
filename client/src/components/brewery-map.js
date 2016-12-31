import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

class BreweryMap extends Component {
    render() {
        return (
            <GoogleMapLoader
                containerElement={
                    <div 
                    style={{
                        width: '400px',
              height: '400px'
            }}
                    />
                }
                googleMapElement={
                    <GoogleMap defaultZoom={10} center={{ lat: Number(this.props.center.latitude), lng: Number(this.props.center.longitude) }}>
                        {this.props.breweries.map(brewery => {
                            return <Marker position={{ lat: Number(brewery.latitude), lng: Number(brewery.longitude) }} key={brewery.id} />
                        })}
                    </GoogleMap>
                }
            />
        );
    }
}
export default BreweryMap;