//import { options } from 'nodemon/lib/config';

import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import testStuff from './Test';
import axios from 'axios';
import moment from 'moment';

const RestaurantDetailsAdmin = props => {
    const [showButton, setShowButton] = useState(true);
    const [allBookings, setallBookings] = useState(''); 
    console.log(props.currentRestaurant)
  
    useEffect(() => { 
        getBookings() 
    },[props.currentRestaurant]) 

    const getBookings = async () => { 
        console.log(props.currentRestaurant)
        if(!props.currentRestaurant){
            return;
        }
        const restaurantNum = props.currentRestaurant.restaurantNum
        console.log(restaurantNum)
        const response = await axios
        .get(`/bookings/getBooking?restaurantNum=${restaurantNum}`) 
        .catch((err) => {
            console.log("err",err)
        }) 
        setallBookings(response.data);
    }
    if(!props.currentRestaurant){
        return <div>Select a Restaurant!</div>
    }

    const restaurantNum = props.currentRestaurant.restaurantNum
    const handleSubmit = e => {

        e.preventDefault();
        setShowButton(true);
    }
    console.log(allBookings)
    return(
        <div>
            <h3>Restaurant Details</h3>
            <p>
                Name:{props.currentRestaurant.name}<br />
                Address:{props.currentRestaurant.address}
            </p>  
            <h2>Bookings:</h2> 
            <div>
                {allBookings?allBookings.map((booking)=>{
                    var date=booking.date
                    var NewDate= moment(date, 'DD-MM-YYYY').format();
                    NewDate=NewDate.split('T')[0];
                     return <div key={booking.bookingNum}>
                                {`#${booking.bookingNum}  : ${booking.clientName} reserved a table for the date ${NewDate}`}
                            </div>}):''}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        currentRestaurant: state.currentRestaurant
    }
};

export default connect(mapStateToProps)(RestaurantDetailsAdmin); 
//export default (RestaurantDetails); 