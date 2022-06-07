import React, { Component, useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapMarker';
import './Marker.css';
import {connect} from 'react-redux';
import Geocode from "react-geocode";
import PropTypes from 'prop-types';



const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = props => {
  const [thislng, setThislng] = useState(null)
  const [thislat, setThislat] = useState(null) 
   
  useEffect(() =>{
    const getCoords = () {
    const allCoords= props.restaurants.restaurants.map(function(restaurant, index) { 
      Geocode.setApiKey("AIzaSyByvZEhbhUOwuNnMkiOmz6LRDG9hmz2BnM")
      Geocode.enableDebug();
      const address = restaurant.address;
      Geocode.fromAddress(address).then(
        (response) => {
          const thislat = response.results[0].geometry.location.lat;
          const thislng = response.results[0].geometry.location.lng; 
          <Marker 
            lat = {thislat} 
            lng = {thislng} 
          /> 
        },
        (error) => {
          console.error(error);
        }
      );
      console.log(`working?${thislat}`) 
    });
    return allCoords
    }
  }) 

  return() => {
    const { center, restaurants } = this.props;
    return (
      <div className="c-map">
        <GoogleMapReact
          center={props.center}
          defaultZoom={0}
          maxZoom={100}
          minZoom={0}
        >
          {getCoords()}
        </GoogleMapReact>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
     currentRestaurant: state.currentRestaurant 
  } 
}

export default connect(mapStateToProps) (Map);