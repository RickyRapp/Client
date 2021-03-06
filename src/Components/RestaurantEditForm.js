import React, {useEffect, useState} from 'react';
import {  connect } from 'react-redux';  
import { updateRestaurant, setRestaurant} from '../actions'; 
import axios from 'axios'
import Geocode from "react-geocode"; 

const RestaurantEditForm = props => {
     
    const setOption = (props.categories).map((category) => { 
        return (
            <option  
                value={category.categoryNum} 
                key={category._id}
                >
                {category.categoryName}
            </option>
        )
    })
 
    const currentRestaurantName = props.currentRestaurant.name
    const currentRestaurantAddress = props.currentRestaurant.address
    const currentAssociatedCategory = props.currentRestaurant.categoryNum
    const id = props.currentRestaurant.id 
    const [showButton, setShowButton] = useState(true);
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantAddress, setRestaurantAddress] = useState("");
    const [associatedCategory, setAssociatedCategory] = useState("");
    const [message, setMessage] = useState(""); 

    useEffect(()=>{
        setRestaurantName(currentRestaurantName)
        setRestaurantAddress(currentRestaurantAddress)
        setAssociatedCategory(currentAssociatedCategory)
    },[currentRestaurantName, currentRestaurantAddress, currentAssociatedCategory])  

 
    const handleSubmit = async e => {
          e.preventDefault();
          const newRestaurantName = restaurantName
          const newRestaurantAddress = restaurantAddress
          const newAssociatedCategory = associatedCategory
          const newRestaurantsInfo =  {
            'address'  :    newRestaurantAddress,
            'categoryNum' :    newAssociatedCategory,
            'name'     :    newRestaurantName 
         };   
         
         Geocode.setApiKey("AIzaSyByvZEhbhUOwuNnMkiOmz6LRDG9hmz2BnM")
         Geocode.enableDebug();
         const address = newRestaurantAddress;  
         Geocode.fromAddress(address).then(
           (response) => {  
             console.log(response.status) 
           },
           (error) => {
             console.error(`error:${error}`); 
             setMessage("invalid address")
             return;  
           }
         ); 
        
     try{
            const newRestaurant = await fetch(`https://restaurant-selections.herokuapp.com/restaurants/${id}`, {  
            method:'PATCH',
            headers: {"content-type":"application/json"}, 
            body: JSON.stringify(newRestaurantsInfo) 
            })
            //await newCategory();
            setRestaurantName(""); 
            setRestaurantAddress("");  
            //setMessage("updated successfully");
            setShowButton(true)            
            const response = await axios
            .get('https://restaurant-selections.herokuapp.com/restaurants') 
            .catch((err) => {
                console.log("err",err)
            })
            console.log(response.data)
            setRestaurant(response.data);
        } 
        catch (err){
            setMessage(`There was an issue: ${err}`);
        }
          

      }
    
    return(
        <div>
            {showButton ? 
            <button className="ui button" onClick={()=> setShowButton(false) }>Edit Restaurant</button>
            :
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e) => setRestaurantName(e.target.value)}
                    type="text" 
                    value={restaurantName}
                    placeholder="Restaurant Name" 
                    className="ui input"
                    />
                </div>
                <div>
                    <input onChange={(e) => setRestaurantAddress(e.target.value)}
                    type="text" 
                    value={restaurantAddress}
                    placeholder="Address"  
                    className="ui input"
                    />
                </div>
                <div>
                    <select value={currentAssociatedCategory} onChange={e=>{setAssociatedCategory(e.target.value)}}>
                        {setOption}
                    </select>
                </div>
                <button className="ui button" type="submit">Save</button>
                <button className="ui button" onClick={()=> setShowButton(true) }>Cancel</button> 
            </form>
            }
            {message}
        </div>
    )}

    
    const mapStateToProps = state => {
        return {
           currentRestaurant: state.currentRestaurant,
           categories: state.categories.categories ,
        } 
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            updateRestaurant: () => dispatch(updateRestaurant())
          }          
    }

    export default connect(mapStateToProps, mapDispatchToProps)(RestaurantEditForm);

