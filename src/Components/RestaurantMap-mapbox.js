import '../App.css'
import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja3lyYXBwIiwiYSI6ImNsM2x2cmplaDA0MWczZHBtYnJidTNvbzYifQ.VY6ISg8-UhadFmkpPUZwVQ';

//const mapboxToken = 'pk.eyJ1Ijoicmlja3lyYXBwIiwiYSI6ImNsM2x2cmplaDA0MWczZHBtYnJidTNvbzYifQ.VY6ISg8-UhadFmkpPUZwVQ'

const RestaurantMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-74.218500);
    const [lat, setLat] = useState(40.069560);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          marker: [lng, lat],
          zoom: zoom
        });
      });
      return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
        );

}

export default RestaurantMap;