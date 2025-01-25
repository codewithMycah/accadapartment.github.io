import React, { useState } from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';

const GoogleMap = (props) => {
    const [infoWindow, setInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const style = {
        width: "100%", // Adjust width as needed
        height: "100%",
    };

    const coords = { lat: 17.624259037179204, lng: 121.72557616572121 };
    
    let onMarkerClick = ((props, marker, e) => {
        setSelectedPlace(props)
        setActiveMarker(marker)
        setInfoWindow(true)
    })

    let onMapClick = ((props) => {
        if(infoWindow) {
            setInfoWindow(false)
            setActiveMarker(null)
        }
    })

    return (
        <div className='relative w-full h-[500px]'>
            <Map
                google={props.google}
                onClick={onMapClick}
                zoom={15}
                style={style}
                initialCenter={coords}
            >
                <Marker
                    onClick={onMarkerClick}
                    title={'Accad\'s Apartment'}
                    name={'Accad\'s Apartment'}
                    position={coords} />
                <InfoWindow
                    marker={activeMarker}
                    visible={infoWindow}>
                    <div>
                        <h1>{selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: 'AIzaSyC73IayBZ-RdQAq6NvMHagbOrVK3BXa3cE'})(GoogleMap);
