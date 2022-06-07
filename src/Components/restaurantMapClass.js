import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapMarker';
import './Marker.css';
import {connect} from 'react-redux';
import Geocode from "react-geocode";
import PropTypes from 'prop-types';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  state={thislng:null, thislat:null}
  static propTypes = { 
    //handleClick: PropTypes.func,
    restaurants: PropTypes.object,
    center: PropTypes.object
  };
  
  componentDidMount(){

    const allCoords= this.props.restaurants.restaurants.map(function(restaurant, index) {
      console.log("get address here")  
      Geocode.fromAddress(restaurant.address).then((response) => {
        this.setState={thislng:response}
       })   
        
      if(!restaurant.address){
        return;
      } 
      console.log(this.state)
      Geocode.setApiKey("AIzaSyByvZEhbhUOwuNnMkiOmz6LRDG9hmz2BnM")
      const address = this.props.currentRestaurant.address;
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        (response) => {
          const thislat = response.results[0].geometry.location.lat;
          const thislng = response.results[0].geometry.location.lng;
          this.setState({thislat:thislat, thislng:thislng}) 
        },
        (error) => {
          console.error(error);
        }
      );
      console.log(`working?${Geocode.fromAddress(restaurant.address)}`)
      return (
        <Marker
        
          key={index}
          //lat = {lat}
          //lng = {lng}
          lng = {restaurant.address.geometry.location.lng}
          lat = {restaurant.address.geometry.location.lat}
        //  const lng = response.results[0].geometry.location.lng;
         // lat={Geocode.fromAddress(restaurant.address).then((response) => {
         //    return response.results[0].geometry.location.lat;  
        //    })}  
          restaurant={restaurant}
        //  handleClick={handleClick}
        />
      )
    });
    console.log(allCoords)
  }
  
  renderMarkers(restaurants) { 
    console.log(restaurants.restaurants)

    return restaurants.restaurants.map(function(restaurant, index) {
      console.log("get address here")  
      Geocode.fromAddress(restaurant.address).then((response) => {
        //this.setState={thislng:response}
       })   
        
      if(!restaurant.address){
        return;
      } 
     // console.log(this.state)
      Geocode.setApiKey("AIzaSyByvZEhbhUOwuNnMkiOmz6LRDG9hmz2BnM")
      console.log(props)
      const address = props.currentRestaurant.address;
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        (response) => {
          const thislat = response.results[0].geometry.location.lat;
          const thislng = response.results[0].geometry.location.lng;
          this.setState({thislat:thislat, thislng:thislng}) 
        },
        (error) => {
          console.error(error);
        }
      );
      console.log(`working?${Geocode.fromAddress(restaurant.address)}`)
      return (
        <Marker
        
          key={index}
          //lat = {lat}
          //lng = {lng}
          lng = {restaurant.address.geometry.location.lng}
          lat = {restaurant.address.geometry.location.lat}
        //  const lng = response.results[0].geometry.location.lng;
         // lat={Geocode.fromAddress(restaurant.address).then((response) => {
         //    return response.results[0].geometry.location.lat;  
        //    })}  
          restaurant={restaurant}
        //  handleClick={handleClick}
        />
      )
    });
  };

  render() {
    const { center, restaurants } = this.props;
    return (
      <div className="c-map">
        <GoogleMapReact
          center={center}
          defaultZoom={0}
          maxZoom={100}
          minZoom={0}
        >
          {this.renderMarkers(restaurants)}
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