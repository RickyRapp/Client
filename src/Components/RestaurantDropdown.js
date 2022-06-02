import React, {Component, useEffect, useState} from 'react'; 
import {  useDispatch, connect } from 'react-redux';
import { selectRestaurant, setRestaurant} from '../actions'; 
import '../App.css';
import axios from 'axios';
import RestaurantOptions from './RestaurantOptions';
import RestaurantBookForm from './RestaurantBookForm';
 
const RestaurantDropdown = props => {
    const dispatch = useDispatch(); 

    const getRestaurants = async () => { 
        const response = await axios
        .get('/restaurants/getRestaurants') 
        .catch((err) => {
            console.log("err",err)
        }) 
       // console.log(response.data)
        dispatch(setRestaurant(response.data));
    }
    useEffect(() => {
        getRestaurants()
        console.log("should go to new funciton")
    },[])  
    const handleRestaurantChange = e => {
        const address=e.target.childNodes[e.target.selectedIndex].getAttribute('address')
        const categoryNum=e.target.childNodes[e.target.selectedIndex].getAttribute('categoryNum')
        const name=e.target.value
        const id=e.target.childNodes[e.target.selectedIndex].getAttribute('id') 
        dispatch(selectRestaurant(e.target.value==='(Select One)' ? null : {id, address, categoryNum, name }))
    }   
      const renderOptions =(props.restaurants).map(restaurant => {  
          return(
            <option 
            className={props.selectedCategoryNum.categoryNum > 0 && props.selectedCategoryNum.categoryNum != restaurant.categoryNum ?'hide':'show'} 
            key={restaurant.restaurantNum} 
            address={restaurant.address}
            categoryNum={restaurant.categoryNum}
            id={restaurant._id} >{restaurant.name}
            </option> 
          )
        }) 
        return( 
            <div>      
                <label>Select a Restaurant</label>
                <select onChange={e=>handleRestaurantChange(e)}>
                    <option>(Select One)</option>
                    {renderOptions} 
                </select>      
                {props.currentLoggedInAs==='admin'?<RestaurantOptions />:<RestaurantBookForm /> }
            </div> 
        ) 
}

const mapStateToProps = state => { 
    return { 
        restaurants: state.restaurants.restaurants ,
        setRestaurant : {setRestaurant},
        selectedCategoryNum: state.currentCategory,
        currentLoggedInAs: state.currentLoggedInAs
    };
};

//export default DropDownNew;
export default connect(mapStateToProps, {selectRestaurant} )(RestaurantDropdown)









