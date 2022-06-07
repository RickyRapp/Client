import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';  
import { updateRestaurant} from '../actions'; 
import axios from 'axios'

const RestaurantEditForm = props => {
     
    const setOption = (props.categories).map((category) => {
        //console.log(option.selected)
        return (
            <option 
                //onChange={() => option.onSelectedChange(option)} 
                //onClick={()=>onSelectChange(option)} 
                value={category.categoryNum}
                //id={category._id}
                key={category._id}
                >
                {category.categoryName}
            </option>
        )
    })

 //   if(!props.currentRestaurant){
  //      return <div>Select a Restaurant!</div>
  //  }
  //  console.log(props)
    const currentRestaurantName = props.currentRestaurant.name
    const currentRestaurantAddress = props.currentRestaurant.address
    const currentAssociatedCategory = props.currentRestaurant.categoryNum
    const id = props.currentRestaurant.id
  //  console.log(currentCategoryName)
    const [showButton, setShowButton] = useState(true);
    const [restaurantName, setRestaurantName] = useState("");
    const [restaurantAddress, setRestaurantAddress] = useState("");
    const [associatedCategory, setAssociatedCategory] = useState("");
    const [message, setMessage] = useState(""); 
    const [isChecked, setIsChecked] = useState(""); 
    const [isValid, setIsValid] = useState(""); 

    useEffect(()=>{
        setRestaurantName(currentRestaurantName)
        setRestaurantAddress(currentRestaurantAddress)
        setAssociatedCategory(currentAssociatedCategory)
    },[currentRestaurantName, currentRestaurantAddress, currentAssociatedCategory])  



    console.log(associatedCategory)
    const handleSubmit = async e => {
          e.preventDefault();
          const newRestaurantName = {restaurantName}
          const newRestaurantAddress = {restaurantAddress}
          const newAssociatedCategory = {associatedCategory} 
          const newRestaurantsInfo =  {
            'newRestaurantAddress'  :    newRestaurantAddress,
            'newAssociatedCategory' :    newAssociatedCategory,
            'newRestaurantName'     :    newRestaurantName 
         };   
         

 

         console.log(newAssociatedCategory)
        
          const newRestaurant = await fetch(`/restaurants/editRestaurant/${id}`, { 
         // headers: {"accepts":"application/json"},
          method:'PATCH',
          headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
          //  headers: {"content-type":"application/json"},
         // body: JSON.stringify(categoryName) 
         // body: JSON.stringify(newRestaurantsInfo) 
          body: JSON.stringify({newRestaurantsInfo}) 
    })
     try{
            //await newCategory();
            setRestaurantName(""); 
            setRestaurantAddress("");  
            setMessage("updated successfully");
            setShowButton(true)
           // props.getCategories(); 
        } 
        catch (err){
            setMessage(`There was an issue: ${err}`);
        }
          

      }
    
    return(
        <div>
            {showButton ? 
            <button onClick={()=> setShowButton(false) }>edit restaurant!</button>
            :
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e) => setRestaurantName(e.target.value)}
                    type="text" 
                    value={restaurantName}
                    placeholder="Restaurant Name"
                    className='ui input' 
                    />
                </div>
                <div>
                    <input onChange={(e) => setRestaurantAddress(e.target.value)}
                    type="text" 
                    value={restaurantAddress}
                    placeholder="Address" 
                    className='ui input' 
                    />
                </div>
                <div>
                    <select value={currentAssociatedCategory} onChange={e=>{setAssociatedCategory(e.target.value)}}>
                        {setOption}
                    </select>
                </div>
                <button type="submit">Save</button>
                <button onClick={()=> setShowButton(true) }>Cancel</button> 
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

