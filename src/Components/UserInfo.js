import React, {useState, useEffect} from "react";
import DropDownNew from './DropDownNew';
import RestaurantDetailsUser from "./RestaurantDetailsUser";
import RestaurantMap from "./RestaurantMap";
import {connect} from 'react-redux';
import Geocode from "react-geocode";

const UserInfo = props => { 
    return(
        <div>
            <div style={{"display": "flex"}}>Welcome! Please choose a category to view the list of restaurants!</div><br />
            <div style={{"display": "flex"}}><DropDownNew /></div><br /> 
        {
            props.currentRestaurant 
            ?
            <div style={{"display": "flex"}}><RestaurantMap restaurants={props.restaurants} /><RestaurantDetailsUser /> </div>
            :
            'Please select a restaurant'}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentRestaurant: state.currentRestaurant,
        restaurants: state.restaurants
    } 
  }
  
export default connect(mapStateToProps) (UserInfo); 