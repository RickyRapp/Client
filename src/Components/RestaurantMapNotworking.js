import React, { Component } from 'react';
import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = 'pk.eyJ1Ijoicmlja3lyYXBwIiwiYSI6ImNsM2x2cmplaDA0MWczZHBtYnJidTNvbzYifQ.VY6ISg8-UhadFmkpPUZwVQ'

class RestaurantMap extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        width: '70vw',
        height: '70vh',
        latitude: 40.069560,
        longitude: -74.218500,
        zoom: 11
      }
    }
    this.handleViewportChange = this.handleViewportChange.bind(this)
  }
  handleViewportChange(viewport) {
    this.setState(prevState => ({
      viewport: {...prevState.viewport, ...viewport}
    }))
  }
  render() {
    return (
      <ReactMapGl
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({viewport})}
        mapboxAccessToken={mapboxToken}
        mapStyle="mapbox://styles/mapbox/streets-v10"
      />
    )
  }
}

export default RestaurantMap;